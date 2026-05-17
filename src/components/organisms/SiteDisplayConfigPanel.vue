<template>
  <!-- 情報源ごとの表示・並び替えを操作する設定パネル。 -->
  <div class="panel-body pa-2">
    <v-switch
      v-model="appState.useMenu"
      color="success"
      density="compact"
      hide-details
      label="表示設定を有効化"
    />

    <div class="d-flex align-center ga-2 mb-2">
      <v-btn
        size="small"
        variant="tonal"
        prepend-icon="mdi-refresh"
        :loading="sites.isLoading"
        @click="sites.fetchSites()"
      >
        更新
      </v-btn>
      <v-btn
        size="small"
        variant="tonal"
        color="warning"
        prepend-icon="mdi-restore"
        :loading="sites.isLoading"
        @click="resetSites"
      >
        初期化
      </v-btn>
    </div>

    <v-select
      v-model="selectedPresetKey"
      :items="presetItems"
      clearable
      density="compact"
      hide-details
      item-title="title"
      item-value="value"
      label="並び替えプリセット"
      variant="outlined"
      @update:model-value="applySelectedPreset"
    />

    <div class="d-flex align-center mt-3 mb-1">
      <v-btn
        icon="mdi-chevron-up"
        size="x-small"
        variant="text"
        :disabled="sitePage <= 1"
        @click="sitePage--"
      />
      <div class="text-caption text-medium-emphasis flex-grow-1 text-center">
        {{ sitePage }} / {{ totalSitePages }} ページ
      </div>
      <v-btn
        icon="mdi-chevron-down"
        size="x-small"
        variant="text"
        :disabled="sitePage >= totalSitePages"
        @click="sitePage++"
      />
    </div>

    <v-list class="site-list" density="compact" lines="one">
      <v-list-item
        v-for="id in pagedSiteIds"
        :key="id"
        :title="sites.siteData[id]?.name"
      >
        <template #prepend>
          <v-switch
            :model-value="sites.siteData[id]?.isShow"
            color="success"
            density="compact"
            hide-details
            @update:model-value="sites.setShow(id, Boolean($event))"
          />
        </template>

        <template #append>
          <div class="d-flex align-center ga-1">
            <v-btn
              icon="mdi-arrow-up"
              size="x-small"
              variant="text"
              @click="sites.moveUp(id)"
            />
            <v-btn
              icon="mdi-arrow-down"
              size="x-small"
              variant="text"
              @click="sites.moveDown(id)"
            />
          </div>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useAppState } from '@/stores/appState'
import { useSiteStore, type SiteOrderPreset } from '@/stores/siteStore'
import SiteDataWeightPreset from '@/assets/siteDataWeightPreset.json'

const appState = useAppState()
const sites = useSiteStore()

const selectedPresetKey = ref<string | null>(null)
const sitePage = ref(1)

// 左ペイン内で操作しやすいよう、サイト一覧は固定件数でページ分割します。
const SITE_PAGE_SIZE = 5

// JSON のプリセット定義を Vuetify select で扱いやすい配列に変換します。
const siteOrderPreset = SiteDataWeightPreset as Record<string, SiteOrderPreset>
const presetItems = computed(() =>
  Object.entries(siteOrderPreset).map(([value, preset]) => ({
    title: preset.name,
    value,
  }))
)

const totalSitePages = computed(() =>
  Math.max(1, Math.ceil(sites.sortedIds.length / SITE_PAGE_SIZE))
)

const pagedSiteIds = computed(() => {
  const start = (sitePage.value - 1) * SITE_PAGE_SIZE
  return sites.sortedIds.slice(start, start + SITE_PAGE_SIZE)
})

watch(totalSitePages, pages => {
  if (sitePage.value > pages) sitePage.value = pages
})

function applySelectedPreset(key: string | null) {
  if (!key) return
  const preset = siteOrderPreset[key]
  if (preset) {
    // プリセット適用後は先頭ページに戻し、変更後の上位サイトをすぐ確認できるようにします。
    sites.applyOrderPreset(preset)
    sitePage.value = 1
  }
}

async function resetSites() {
  if (window.confirm('サイト設定を初期化しますか？')) {
    // Firestore 由来の初期順に戻す破壊的操作なので、ユーザー確認後だけ実行します。
    await sites.resetSites()
    sitePage.value = 1
  }
}
</script>

<style scoped>
.panel-body {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.site-list {
  overflow: hidden;
}
</style>
