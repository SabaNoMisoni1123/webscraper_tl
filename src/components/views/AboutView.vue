<template>
  <v-container class="content-page h-100 py-6" fluid>
    <div class="content-page__inner">
      <header class="mb-6">
        <h1 class="text-h5 mb-2">{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>
        <p class="text-body-1">官公庁ウェブサイトの新着情報を横並びのタイムラインで確認できます。</p>
      </header>

      <v-divider class="mb-6" />

      <section aria-labelledby="source-heading" class="mb-8">
        <h2 id="source-heading" class="text-h6 mb-1">情報源一覧</h2>
        <p class="text-body-2 mb-3">以下の URL から情報を収集しています。</p>

        <v-progress-linear v-if="sites.isLoading" indeterminate />
        <v-list v-else bg-color="transparent" lines="two">
          <v-list-item
            v-for="site in sortedSites"
            :key="site.id"
            :href="site.url"
            :subtitle="site.url"
            :title="site.name"
            append-icon="mdi-open-in-new"
            prepend-icon="mdi-web"
            rel="noopener noreferrer"
            target="_blank"
          />
        </v-list>
      </section>

      <section aria-labelledby="release-heading">
        <h2 id="release-heading" class="text-h6 mb-2">リリースノート</h2>
        <v-list bg-color="transparent" density="compact">
          <v-list-item v-for="release in releases" :key="release.version">
            <template #prepend>
              <v-icon icon="mdi-tag-outline" />
            </template>
            <v-list-item-title>{{ release.date }} v{{ release.version }}</v-list-item-title>
            <v-list-item-subtitle v-if="release.description">
              {{ release.description }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </section>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import AppConfig from '@/assets/AppConfig.json'
import { useSiteStore } from '@/stores/siteStore'

const sites = useSiteStore()

const sortedSites = computed(() =>
  sites.sortedIds.map(id => sites.siteData[id]).filter(Boolean)
)

const releases = [
  { date: '2024/04/08', version: '0.2', description: '' },
  { date: '2024/04/29', version: '0.3', description: '検索機能追加' },
  { date: '2024/05/26', version: '0.4', description: '掲載情報のデータベース化' },
  { date: '2024/06/23', version: '0.5', description: '過去データの追加読込機能追加' },
] as const

onMounted(() => {
  if (sites.sortedIds.length === 0) void sites.fetchSites()
})
</script>

<style scoped>
.content-page {
  overflow-y: auto;
}

.content-page__inner {
  width: min(100%, 800px);
  margin: 0 auto;
}
</style>
