<template>
  <!-- 情報源ごとの表示・並び替えを操作する設定パネル。 -->
  <div class="panel-body pa-2">
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

    <v-list class="site-list" density="compact">
      <v-list-item
        v-for="id in pagedSiteIds"
        :key="id"
        class="site-list-item px-2"
      >
        <div class="site-row">
          <div class="site-switch-cell">
            <v-switch
              :model-value="sites.siteData[id]?.isShow"
              :aria-label="`${sites.siteData[id]?.name ?? id}を表示`"
              class="site-switch"
              color="success"
              density="compact"
              hide-details
              @update:model-value="sites.setShow(id, Boolean($event))"
            />
          </div>

          <div class="site-title text-body-2">
            {{ sites.siteData[id]?.name }}
          </div>

          <div class="site-actions d-flex align-center ga-1">
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
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSiteStore, type SiteOrderPreset } from '@/stores/siteStore'
import SiteDataWeightPreset from '@/assets/siteDataWeightPreset.json'

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
  max-width: 100%;
  overflow: hidden;
}

.site-list {
  max-width: 100%;
  overflow: hidden;
}

.site-list-item {
  min-height: 42px;
  max-width: 100%;
}

.site-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.site-switch-cell {
  flex: 0 0 58px;
  min-width: 58px;
  max-width: 58px;
  padding-inline-start: 10px;
  overflow: visible;
}

.site-switch {
  width: 48px;
  max-width: 48px;
}

.site-switch :deep(.v-input__control),
.site-switch :deep(.v-selection-control) {
  width: 48px;
  min-width: 48px;
  max-width: 48px;
}

.site-switch :deep(.v-selection-control) {
  flex: 0 0 48px;
}

.site-title {
  flex: 1 1 auto;
  min-width: 0;
  line-height: 1.25;
  overflow-wrap: anywhere;
}

.site-actions {
  flex: 0 0 auto;
  margin-inline-start: 4px;
}
</style>
