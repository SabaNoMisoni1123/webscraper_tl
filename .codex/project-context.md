# Project Context: webscraper_tl

このメモは、Codex がこのリポジトリを扱う際の詳細な把握用です。回答・作業は `AGENTS.md` を優先し、このファイルは補助情報として参照してください。

## 現在の目的

`webscraper_tl` は、官公庁ウェブサイトなどから収集されたスクレイプ結果を、情報源ごとのタイムライン UI として閲覧するためのフロントエンドです。スクレイピング処理そのものは別リポジトリに分離され、このリポジトリは Firestore に格納されたサイト情報・記事情報を読み込み、横並びのタイムラインとして表示します。

## 確認済みファイル範囲

`node_modules` と `.git` を除き、以下の実ファイルを確認済みです。

- ルート設定: `README.md`, `package.json`, `package-lock.json`, `index.html`, `.gitignore`, `.eslintrc.cjs`, `vite.config.ts`, `vitest.config.ts`, `tsconfig*.json`, `env.d.ts`, `cypress.config.ts`, `LICENSE.txt`, `tree.txt`
- GitHub Actions: `.github/workflows/deploy.yml`
- public: `public/.htaccess`, `public/favicon.ico`, `public/icon.svg`, `public/robots.txt`
- Cypress: `cypress/e2e/example.cy.ts`, `cypress/e2e/tsconfig.json`, `cypress/fixtures/example.json`, `cypress/support/commands.ts`, `cypress/support/e2e.ts`
- アプリ入口: `src/main.ts`, `src/App.vue`, `src/router/index.ts`, `src/firebase.ts`, `src/vuetify.ts`
- assets: `src/assets/AppConfig.json`, `ColorPallet.json`, `siteDataWeightPreset.json`, `base.css`, `main.css`, `logo.svg`
- stores: `appState.ts`, `dbMetaStore.ts`, `dbStore.ts`, `searchCondition.ts`, `siteStore.ts`, `timelineStore.ts`, `wsStore.ts`
- components: `pages`, `views`, `organisms`, `molecules`, `atoms`, `icons`, `__tests__` 配下の Vue / test ファイル

## アプリ構造

起動順は `src/main.ts` で `createApp(App)`、Pinia、Router、Vuetify を登録し、`router.isReady()` 後に mount します。グローバル CSS は Vuetify、MDI font、`base.css`、`main.css` の順に読み込まれます。

`src/App.vue` は Vuetify の `v-app` を使った全体枠です。AppBar、Footer、右ドロワーを持ち、中央の `RouterView` にページを描画します。アクセス数は `useDbDataStore` の `noAccess` を参照していますが、メイン画面側は新系の `dbMetaStore` を利用しているため、今後の整理対象です。

トップルート `/` は `WsAppPage.vue` で、左に `WsConfigView.vue`、右に `WsAppView.vue` を配置します。`WsAppView.vue` は `dbMetaStore` でメタ情報を取得し、`siteStore` で表示対象サイトを取得し、`Timeline.vue` をサイトごとに生成します。

`Timeline.vue` は `timelineStore` を使い、`siteId` と `dbTimestamp` を監視して初回ロード・キャッシュ利用・追加ロードを行います。記事表示には `ArticleItem.vue` を使います。

## データモデル

Firestore の想定:

- `timeLog/lastTime`: `lastTimeEpoch`, `noAccess`
- `siteData`: サイト情報。主な項目は `name`, `url`, `id`, `no`
- 各 `siteId` 名のコレクション: 記事情報。主な項目は `title`, `url`, `org`, `epoch`

主要型:

- `SiteData`: `name`, `url`, `weight`, `color`, `isShow`, `valid`, `id`, `no`
- `ArticleData`: `title`, `url`, `org`, `epoch`
- `TlBucket`: サイトごとの記事配列、読み込み状態、ロード時 timestamp、ページング用 lastDoc

## 新旧ストアの対応

新系:

- `dbMetaStore.ts`: DB 最終更新時刻とアクセス数。
- `siteStore.ts`: サイト一覧、表示可否、並び順、色、プリセット適用。
- `timelineStore.ts`: 記事ロード、キャッシュ、追加ロード。

旧系:

- `dbStore.ts`: サイト一覧とメタ情報が混在。
- `wsStore.ts`: 記事ロード。

旧 UI:

- `Timeline_old.vue`, `CfgTabBar.vue`, `NewsTimeline.vue`, `SearchedTimeline.vue`, `TlTitleBlock.vue`, `TestView.vue` などは旧ストア参照が残っています。

## Vuetify 移行の開発方針

今後の UI 開発では、Vue の素の HTML/CSS と独自 SVG ボタン中心の実装を、Vuetify 3 の標準コンポーネントへ段階的に置き換える方針です。目的は可読性、操作性、保守性、レスポンシブ対応の改善です。

優先する置き換え:

- 独自ボタン系コンポーネントは `v-btn` + MDI アイコンへ寄せる。
- 独自タイトルバーやボックスは `v-toolbar`、`v-card`、`v-card-title`、`v-card-text` へ寄せる。
- 検索・設定 UI は `v-text-field`、`v-select`、`v-switch`、`v-checkbox`、`v-list` を使う。
- ローディングや空状態は `v-progress-linear`、`v-skeleton-loader`、`v-alert` などで表す。
- 横並びタイムライン、メイン領域の高さ、スクロールの成立に必要な CSS は残してよいが、色・余白・ボタン表現は Vuetify theme と utility class に寄せる。

詳細な移行方針は `.codex/vuetify-migration.md` に分離しています。

## 既知の注意点

- `src/components/molecules/ArticleItem.vue` は正しい `articleDescription` prop に移行済みですが、既存互換のため typo 版 `articleDesctiption` も受け付けています。新規コードでは `articleDescription` を使ってください。
- `src/stores/searchCondition.ts` は正しい `useSearchConditionStore` を export 済みですが、既存互換のため typo 版 `useSearchCondtionStore` も残しています。新規コードでは `useSearchConditionStore` を使ってください。
- `src/components/__tests__/HelloWorld.spec.ts` は現存する `AppConfig` のテストへ置き換え済みです。ファイル名は今後のテスト追加時に実態に合わせてリネーム候補です。
- `cypress/e2e/example.cy.ts` は `MiniCrawler` 表示確認へ更新済みですが、Firestore 接続を含む実画面 E2E としてはまだ最低限です。
- `.gitignore` に `package-lock.json` が含まれていますが、ローカルには `package-lock.json` が存在します。依存変更時は扱いを確認してください。
- `src/assets/main.css`、`src/components/pages/WsAppPage.vue`、`src/components/views/WsAppView.vue` には既存の作業差分があります。ユーザーの変更として扱い、勝手に巻き戻さないでください。
- Vuetify 移植前のリファクタリング状況は `.codex/refactor-notes.md` を参照してください。

## 外部ドキュメント確認メモ

2026-04-28 時点で Context7 MCP を使い、Vue 3 の SFC / TypeScript 指針を確認済みです。選択したライブラリ ID は `/websites/vuejs_guide` です。確認した要点:

- Vue 3 SFC では `<script setup lang="ts">` を使うと template 内も含めて型チェックと補完が効く。
- TypeScript 利用時の props は `defineProps<...>()` の型ベース宣言が利用できる。
- emits は `defineEmits<...>()` でイベント名と引数型を明示できる。

## 変更時の推奨チェック

小さな UI 変更:

1. `npm run type-check`
2. 必要に応じて `npm run build`

Firestore / store / router / Vuetify 設定変更:

1. `npm run type-check`
2. `npm run build`
3. 関連画面を開発サーバーで目視確認

テスト変更:

1. `npm run test:unit`
2. E2E を触った場合は `npm run test:e2e:dev` または `npm run test:e2e`
