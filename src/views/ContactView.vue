<template>
  <div class="contact">
    <div class="contactBoddy">
      <h1>{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>
      <p>官公庁ウェブサイトから新着情報を収集し、ライムライン形式でまとめるサイトです。</p>
      <p>詳しくは、本ウェブサイトコードのレポジトリ<a
          href="https://github.com/SabaNoMisoni1123/webscraper_tl">https://github.com/SabaNoMisoni1123/webscraper_tl</a>をご参照ください。
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import AppConfig from '@/assets/AppConfig.json';
</script>

<style>
.contact {
  width: 90vw;
  white-space: normal;
  padding: 10pt;
}

.contactBoddy {
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30pt;
}
</style>

