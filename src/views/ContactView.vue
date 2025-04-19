<template>
  <div class="contact">
    <div class="contactBoddy">
      <h1>{{ AppConfig.appName }} v{{ AppConfig.version }}</h1>
      <p>官公庁ウェブサイトから新着情報を収集し、タイムライン形式でまとめるサイトです。</p>
      <p>詳しくは、本ウェブサイトコードのレポジトリ<a
          href="https://github.com/SabaNoMisoni1123/webscraper_tl">https://github.com/SabaNoMisoni1123/webscraper_tl</a>をご参照ください。
      </p>
      <h2>アンケートのご依頼</h2>
      <p>下記のMCUナレッジシェアのメール内容や近藤さんツールにつきまして、ご意見・ご要望などございましたらご記入いただけますと幸いです。</p>
      <p>なお、ご質問やフィードバックのため、担当者からご連絡させていただく場合がございます。そのため、お名前を自動的に収集することご容赦ください。収集したお名前は<u>担当者のみ</u>が確認いたします。</p>
      <br>
      <p>何卒よろしくお願いいたします。</p>
      <br>
      <p>MCUナレッジシェア担当（MC3安部・近藤）</p>
      <br>
      <p>アンケートURL: <a href="https://forms.office.com/r/FHCs8pHmi8">https://forms.office.com/r/FHCs8pHmi8</a></p>
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

.contactBoddy h2 {
  margin-top: 20pt;
}
</style>

