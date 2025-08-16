<template>
  <v-container class="appPage m-0 p-0" fluid>
    <v-row dense class="height100">
      <v-col :cols="widthCfgCol" class="height100 m-0 p-0">
        <WsConfigView />
      </v-col>

      <v-col :cols="widthAppView" class="height100 m-0 p-0" style="height: 100%;">
        <WsAppView />
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import WsConfigView from '@/components/views/WsConfigView.vue'
import WsAppView from '@/components/views/WsAppView.vue'

import { ref, computed } from 'vue'

const widthCfgCol = ref(3);

const widthAppView = computed(() => {
  return 12 - widthCfgCol.value;
})

</script>

<style scoped>
.appPage {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.height100 {
  min-height: 0;
  height: 100%;
}
</style>
