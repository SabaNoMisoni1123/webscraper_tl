<template>
  <!-- 新着情報タイムラインの表示フラグを切り替える軽量設定パネル。 -->
  <div class="panel-body pa-2">
    <v-switch
      v-model="appState.useNews"
      color="success"
      density="compact"
      hide-details
      label="新規情報を表示"
    />

    <v-alert class="mt-3" density="compact" type="info" variant="tonal">
      新規情報の表示設定はこのタブで管理します。
    </v-alert>
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '@/stores/appState'

// useNews は AppState に永続化され、メインビューの列表示制御に利用されます。
const appState = useAppState()
</script>

<style scoped>
.panel-body {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
</style>
