<template>
  <!-- 新規情報窓の表示条件を管理します。 -->
  <div class="panel-body pa-2">
    <v-switch
      v-model="appState.useNews"
      color="success"
      density="compact"
      hide-details
      label="新規情報を表示"
    />

    <v-select
      v-model="newsDays"
      :items="dayOptions"
      class="mt-2"
      density="compact"
      hide-details
      label="表示日数"
      variant="outlined"
    />

    <v-select
      v-model="newsSiteIds"
      :items="siteItems"
      class="mt-3"
      chips
      closable-chips
      density="compact"
      hide-details
      item-title="title"
      item-value="value"
      label="表示する情報源"
      multiple
      variant="outlined"
    />

    <div class="d-flex align-center ga-2 mt-2">
      <v-btn size="small" variant="tonal" prepend-icon="mdi-check-all" @click="selectAllSites">
        全選択
      </v-btn>
      <v-btn size="small" variant="tonal" prepend-icon="mdi-restore" @click="resetSites">
        既定
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppState } from '@/stores/appState'
import { useSiteStore } from '@/stores/siteStore'

const appState = useAppState()
const sites = useSiteStore()

const dayOptions = [
  { title: '当日分', value: 1 },
  { title: '2日分', value: 2 },
  { title: '3日分', value: 3 },
  { title: '7日分', value: 7 },
  { title: '14日分', value: 14 },
  { title: '30日分', value: 30 },
]

const siteItems = computed(() =>
  sites.sortedIds.map(id => ({
    title: sites.siteData[id]?.name ?? id,
    value: id,
  }))
)

const newsDays = computed<number>({
  get: () => appState.newsDays,
  set: value => appState.setNewsDays(value),
})

const newsSiteIds = computed<string[]>({
  get: () => appState.newsSiteIds.length > 0 ? appState.newsSiteIds : sites.sortedIds,
  set: value => appState.setNewsSiteIds(value),
})

function selectAllSites() {
  appState.setNewsSiteIds(sites.sortedIds)
}

function resetSites() {
  appState.setNewsSiteIds([])
}
</script>

<style scoped>
.panel-body {
  height: 100%;
  min-height: 0;
  overflow-y: auto;
}
</style>
