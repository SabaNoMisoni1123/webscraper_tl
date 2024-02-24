<template>
  <div class="about">
    <h1>{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>
    <p>官公庁ウェブサイトから日々チェックしたい情報を収集し、ライムライン形式でまとめるサイトです。</p>
    <p>詳しくは、本ウェブサイトコードのレポジトリ<a
        href="https://github.com/SabaNoMisoni1123/webscraper_tl">https://github.com/SabaNoMisoni1123/webscraper_tl</a>をご参照ください。
    </p>
  </div>
</template>

<script setup lang="ts">
import AppConfig from '@/assets/AppConfig.json';
</script>

<style>
.about {
  width: 90vw;
  white-space: normal;
}
</style>

