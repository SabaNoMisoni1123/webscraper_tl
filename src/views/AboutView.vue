<template>
  <div class="about">
    <div class="aboutBoddy">
      <h1>{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>

      <h2>情報源一覧</h2>
      <p>以下のURLから情報収集しております。</p>
      <ul>
        <li v-for="val in dbData.siteData">{{ val.name }}: <a :href="val.url">{{ val.url }}</a></li>
      </ul>

      <h2>リリースノート</h2>
      <ul>
        <li>2024/04/08 v0.2</li>
        <li>2024/04/29 v0.3：検索機能追加</li>
        <li>2024/05/26 v0.4：掲載情報のデータベース化</li>
        <li>2024/06/23 v0.5：過去データの追加読込機能追加</li>
      </ul>

    </div>

  </div>
</template>

<script setup lang="ts">
import AppConfig from '@/assets/AppConfig.json';
import { useDbDataStore } from '@/stores/dbStore'

const dbData = useDbDataStore()

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
