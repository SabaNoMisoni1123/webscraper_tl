# Refactor Notes

Vuetify 移植前に進めるべき整理・リファクタリング項目です。

## 今回対応済み

- `appState` に `useSearch` / `useMenu` / `useNews` の後方互換 API を追加し、旧 UI が直接参照しても動くようにした。
- `searchCondition` の store 名 typo に対して、正しい `useSearchConditionStore` と既存互換の `useSearchCondtionStore` を併存させた。
- `searchCondition.rmCondition()` が指定位置以降をすべて削除していたため、1 件だけ削除するよう修正した。
- `dbStore.resetSiteData()` が取得後に空オブジェクトを代入してしまう不具合を修正した。
- `dbStore.setOrderSiteDataPreset()` で存在しない site id を参照した場合に落ちないようにした。
- `wsStore` の siteId 初期化判定、追加読み込みの `limit(noLoadArticles.value)`、空データ時の `lastArticleUrl` 参照、`lastArticle` の null 管理を修正した。
- `ArticleItem.vue` の `articleDesctiption` typo を `articleDescription` に移行しつつ、既存 typo prop も互換として受けられるようにした。
- `ArticleItem.vue` の外部リンク target を `_blank` に修正し、`rel="noopener noreferrer"` を追加した。
- `SearchForm.vue` の `input ty pe` typo、props の `require` typo、Object default の共有を修正した。
- 年選択肢を 2023 年から現在年まで自動生成するようにした。
- 存在しない `HelloWorld.vue` を参照していた単体テストを、現存する `AppConfig` のテストに置き換えた。
- Cypress の初期テンプレート由来の期待文字列を `MiniCrawler` に更新した。
- callback 形式の `vite.config.ts` を `mergeConfig` して失敗していた `vitest.config.ts` を、Vitest 専用の明示設定に修正した。
- `main.css` の `#app` から Vuetify 全画面レイアウトと競合しやすい padding / max-width / desktop grid 指定を外し、全画面アプリ前提の寸法に整理した。
- `WsAppPage.vue` のデバッグ背景色、不要な `ref`、inline height、無効な spacing class を整理し、列幅定数と `no-gutters` ベースのレイアウトにした。
- `WsAppView.vue` のローディング判定、メタ更新の finally 処理、空状態表示、横スクロール列幅、`mp-0` typo を整理した。

## 残っている主な整理候補

- 旧ストア `dbStore.ts` / `wsStore.ts` と新ストア `dbMetaStore.ts` / `siteStore.ts` / `timelineStore.ts` の責務を統一する。
- `App.vue` のアクセス数表示を旧 `dbStore` から新 `dbMetaStore` へ移す。
- `AboutView.vue`、`TestView.vue`、`CfgTabBar.vue`、`NewsTimeline.vue`、`SearchedTimeline.vue`、`Timeline_old.vue`、`TlTitleBlock.vue` の旧ストア依存を解消する。
- `Timeline_old.vue` と `ArticleItemNoButton.vue` を新しい Vuetify ベースの `Timeline.vue` / `ArticleItem.vue` へ統合する。
- `src/components/atoms/button` と `src/components/icons` の独自 SVG ボタンを Vuetify の `v-btn` + MDI アイコンへ段階移行する。
- `WsConfigView.vue` に残る仮置き枠線をテーマ色と Vuetify utility へ置き換える。
- E2E テストは Firestore 接続や空状態を考慮した現在の画面仕様に合わせて再設計する。

## 確認結果

- `npm run type-check`: 成功。
- `npm run test:unit -- --run`: 成功。
- `npm run build`: 画面確認とあわせてユーザー側で実施予定。
