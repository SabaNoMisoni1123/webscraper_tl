<template>
  <v-container class="content-page h-100 py-6" fluid>
    <div class="content-page__inner">
      <header class="mb-6">
        <h1 class="text-h5 mb-2">{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>
        <p class="text-body-1">官公庁ウェブサイトから新着情報を収集し、タイムライン形式でまとめるサイトです。</p>
      </header>

      <v-divider class="mb-6" />

      <section aria-labelledby="repository-heading" class="mb-8">
        <h2 id="repository-heading" class="text-h6 mb-3">リポジトリ</h2>
        <v-btn
          href="https://github.com/SabaNoMisoni1123/webscraper_tl"
          prepend-icon="mdi-github"
          rel="noopener noreferrer"
          target="_blank"
          variant="outlined"
        >
          GitHub でコードを確認
        </v-btn>
      </section>

      <section aria-labelledby="survey-heading">
        <h2 id="survey-heading" class="text-h6 mb-3">アンケートのご依頼</h2>
        <p class="text-body-1 mb-3">
          MCUナレッジシェアのメール内容や近藤さんツールについて、ご意見・ご要望をご記入ください。
        </p>
        <p class="text-body-2 mb-3">
          ご質問やフィードバックのため、担当者からご連絡する場合があります。お名前は担当者のみが確認します。
        </p>
        <p class="text-body-2 mb-5">MCUナレッジシェア担当（MC3安部・近藤）</p>
        <v-btn
          color="primary"
          href="https://forms.office.com/r/FHCs8pHmi8"
          prepend-icon="mdi-form-select"
          rel="noopener noreferrer"
          target="_blank"
        >
          アンケートを開く
        </v-btn>
      </section>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import AppConfig from '@/assets/AppConfig.json'
</script>

<style scoped>
.content-page {
  overflow-y: auto;
}

.content-page__inner {
  width: min(100%, 800px);
  margin: 0 auto;
}
</style>
