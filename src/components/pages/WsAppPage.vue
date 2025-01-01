<template>
  <v-container class="appPage m-0 p-0" fluid>
    <v-row dense>
      <v-col :cols="widthCfgCol" class="m-0 p-0">
        <WsConfigView />
      </v-col>

      <v-col :cols="widthAppView" class="m-0 p-0">
        <WsAppView />
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import WsConfigView from '@/components/views/WsConfigView.vue'
import WsAppView from '@/components/views/WsAppView.vue'

import { useAppState } from '@/stores/appState'
import { ref, computed } from 'vue'

const widthCfgCol = ref(3);

const widthAppView = computed(() => {
  return 12 - widthCfgCol.value;
})

</script>

<style scoped>
.appPage {
  width: 100%;
}
</style>
