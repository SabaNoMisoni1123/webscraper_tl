<template>
  <div class="about">
    <div class="aboutBoddy">
      <h1>{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>

      <h2>情報源一覧</h2>
      <p>以下のURLから情報収集しております。</p>
      <ul>
        <li v-for="val in tlData.tlData">{{ val.name }}: <a :href="val.url">{{ val.url }}</a></li>
      </ul>

      <h2>リリースノート</h2>
      <ul>
        <li>2024/04/08 v0.2</li>
        <li>2024/04/29 v0.3</li>
      </ul>

    </div>

  </div>
</template>

<script setup lang="ts">
import AppConfig from '@/assets/AppConfig.json';
import { useTlDataListStore } from '@/stores/tlData'

const tlData = useTlDataListStore()

</script>

<style>
.about {
  width: 90vw;
  white-space: normal;
  padding: 10pt;
}

.aboutBoddy {
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30pt;
}
</style>
