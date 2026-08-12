<template>
  <!-- 左ペイン全体の設定ビュー。折りたたみ時はアイコンレールだけを残す。 -->
  <v-sheet class="ws-config h-100 d-flex flex-column" color="surface" border="e">
    <template v-if="collapsed">
      <div class="rail">
        <v-btn
          icon="mdi-chevron-right"
          size="small"
          variant="text"
          @click="collapsed = false"
        />
        <v-divider class="my-1" />
        <ConfigIconGroup
          rail
          :use-search="appState.useSearch"
          :use-news="appState.useNews"
          @select="openSection"
        />
      </div>
    </template>

    <template v-else>
      <v-toolbar density="compact" color="surface">
        <v-btn
          icon="mdi-chevron-left"
          size="small"
          variant="text"
          @click="collapsed = true"
        />
        <v-toolbar-title class="text-subtitle-2">設定</v-toolbar-title>
        <v-spacer />
        <ConfigIconGroup
          :use-search="appState.useSearch"
          :use-news="appState.useNews"
          @select="openSection"
        />
      </v-toolbar>

      <v-divider />

      <div class="section-tabs pa-2">
        <ConfigSectionTabs v-model="activeSection" />
      </div>

      <v-divider />

      <v-window v-model="activeSection" class="config-window">
        <v-window-item value="search" class="config-panel">
          <SearchConfigPanel />
        </v-window-item>

        <v-window-item value="news" class="config-panel">
          <NewsConfigPanel />
        </v-window-item>

        <v-window-item value="settings" class="config-panel">
          <SiteDisplayConfigPanel />
        </v-window-item>
      </v-window>
    </template>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfigIconGroup from '@/components/molecules/ConfigIconGroup.vue'
import ConfigSectionTabs from '@/components/molecules/ConfigSectionTabs.vue'
import NewsConfigPanel from '@/components/organisms/NewsConfigPanel.vue'
import SearchConfigPanel from '@/components/organisms/SearchConfigPanel.vue'
import SiteDisplayConfigPanel from '@/components/organisms/SiteDisplayConfigPanel.vue'
import { useAppState } from '@/stores/appState'
import type { ConfigSection } from '@/components/views/wsConfigTypes'

// 親ページからペイン幅を制御できるよう、collapsed は v-model として公開します。
const collapsed = defineModel<boolean>('collapsed', { default: false })

const appState = useAppState()

// 表示中の設定カテゴリ。各パネルは v-window で差し替え、状態はこのビューで一元管理します。
const activeSection = ref<ConfigSection>('search')

// アイコンレールから開いた場合でも、対象パネルがすぐ見えるよう折りたたみを解除します。
function openSection(section: ConfigSection) {
  activeSection.value = section
  collapsed.value = false
}
</script>

<style scoped>
.ws-config {
  min-height: 0;
  overflow: hidden;
}

.rail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding-top: 6px;
}

.section-tabs {
  flex: 0 0 auto;
}

.config-window {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
}

.config-panel {
  height: 100%;
  min-height: 0;
}
</style>
