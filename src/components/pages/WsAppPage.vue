<template>
  <!-- アプリ本体ページ。左に設定ペイン、右に横並びタイムラインを配置します。 -->
  <v-container class="app-page pa-0" fluid>
    <div class="app-layout">
      <aside class="config-pane" :class="{ 'config-pane--collapsed': configCollapsed }">
        <WsConfigView v-model:collapsed="configCollapsed" />
      </aside>

      <main class="timeline-pane">
        <WsAppView />
      </main>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WsConfigView from '@/components/views/WsConfigView.vue'
import WsAppView from '@/components/views/WsAppView.vue'

// 設定ビュー自身ではなくページ側で幅を持つため、折りたたみ状態をここで保持します。
const configCollapsed = ref(false)
</script>

<style scoped>
.app-page {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.app-layout {
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
}

.config-pane {
  width: clamp(300px, 28vw, 420px);
  height: 100%;
  min-width: 0;
  flex: 0 0 auto;
  transition: width 160ms ease;
}

.config-pane--collapsed {
  width: 52px;
}

.timeline-pane {
  flex: 1 1 auto;
  height: 100%;
  min-width: 0;
  min-height: 0;
}
</style>
