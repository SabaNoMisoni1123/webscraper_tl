<template>
  <v-container class="app-page pa-0" fluid>
    <v-row no-gutters class="u-wh100 flex-nowrap">
      <v-col :cols="CONFIG_COLS" class="u-wh100 pa-0 config-col">
        <WsConfigView />
      </v-col>

      <v-col :cols="timelineCols" class="u-wh100 pa-0 timeline-col">
        <WsAppView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WsConfigView from '@/components/views/WsConfigView.vue'
import WsAppView from '@/components/views/WsAppView.vue'

const GRID_COLS = 12
const CONFIG_COLS = 3

const timelineCols = computed(() => GRID_COLS - CONFIG_COLS)

</script>

<style scoped>
.app-page {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.config-col,
.timeline-col {
  min-width: 0;
}
</style>
