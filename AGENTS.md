# AGENTS.md

このリポジトリで作業するエージェント向けの指示です。回答は必ず日本語で行ってください。

## プロジェクト概要

- アプリ名は `MiniCrawler`。
- 官公庁などのウェブスクレイプ結果を、情報源ごとの横並びタイムラインとして表示する Vue アプリです。
- スクレイピング本体は別リポジトリで扱い、このリポジトリは表示 UI と Firestore からの読み込みを担当します。
- 公開先は GitHub Pages を想定し、Vite の `base` は `/webscraper_tl/` です。

## 技術スタック

- Vue 3 + Vite + TypeScript
- Vue Router
- Pinia + `pinia-plugin-persistedstate`
- Vuetify 3 + `vite-plugin-vuetify`
- Firebase v10 modular SDK
- Vitest + Vue Test Utils
- Cypress

ライブラリ、API、フレームワーク、設定項目に関する回答や実装では、可能な限り Context7 MCP で最新ドキュメントを確認してから提案してください。プロジェクト固有のコードやローカルファイルの内容は、外部ドキュメントよりこのリポジトリ内の実ファイルを優先してください。

## よく使うコマンド

- 依存関係のインストール: `npm install`
- 開発サーバー: `npm run dev`
- 型チェックとビルド: `npm run build`
- Vite ビルドのみ: `npm run build-only`
- 型チェックのみ: `npm run type-check`
- 単体テスト: `npm run test:unit`
- E2E テスト: `npm run test:e2e:dev`
- Lint: `npm run lint`

`npm run lint` は `--fix` 付きでファイルを書き換えるため、実行前に作業中の差分を確認してください。

## ディレクトリと責務

- `src/main.ts`: Vue アプリ初期化、Pinia 永続化、Router、Vuetify 登録。
- `src/App.vue`: Vuetify のアプリシェル、AppBar、Footer、右ドロワー、RouterView。
- `src/router/index.ts`: ルーティング。トップは `WsAppPage`。
- `src/firebase.ts`: Firebase 初期化、Firestore/Auth/Analytics、匿名認証 helper。
- `src/vuetify.ts`: Vuetify テーマ、ブランド色、AppBar/Footer 高さ定義。
- `src/assets/*.json`: アプリ設定、色パレット、情報源並び替えプリセット。
- `src/stores`: Pinia ストア。Firestore 取得、タイムライン、UI 状態、検索条件を扱う。
- `src/components/pages`: ページ単位のレイアウト。
- `src/components/views`: 画面領域単位のビュー。
- `src/components/organisms`: タイムラインや設定バーなどの大きめの UI。
- `src/components/molecules` / `src/components/atoms`: 記事カード、検索フォーム、ボタン、バーなどの小さな UI。

## 実装方針

- Vue SFC は既存方針に合わせ、原則として `<script setup lang="ts">` を使ってください。
- props / emits は、可能な範囲で TypeScript の型を明示してください。
- import alias は `@/` を使ってください。
- UI は Vuetify 3 を優先し、既存のテーマ色は `src/assets/ColorPallet.json` または `src/vuetify.ts` の semantic color に合わせてください。
- レイアウトの高さは `src/vuetify.ts` の `LAYOUT` と CSS 変数 `--appbar-h` / `--footer-h` との整合を崩さないでください。
- Firestore への直接アクセスはストア層に寄せ、コンポーネントではストアの state/getter/action を使ってください。
- Firebase の環境変数は `VITE_FIREBASE_*` で扱い、`.env.local` の内容や秘密情報を回答に露出しないでください。
- GitHub Pages 配信を壊さないよう、`vite.config.ts` の `base: '/webscraper_tl/'` と `createWebHistory(import.meta.env.BASE_URL)` の組み合わせを維持してください。

## Vuetify 移行方針

このプロジェクトでは、従来の素の HTML/CSS や独自 SVG ボタン中心の UI を、可能な範囲で Vuetify 3 のコンポーネントへ移行し、可読性・保守性・操作性を上げる方針です。新規 UI と既存 UI の改修では、まず Vuetify で表現できるかを検討してください。

- アプリ全体の骨格は `v-app`、`v-app-bar`、`v-navigation-drawer`、`v-main`、`v-footer` を基本にしてください。
- 画面レイアウトは `v-container`、`v-row`、`v-col`、Vuetify の flex / spacing utility を優先してください。
- ボタンは `v-btn` を基本とし、アイコン操作は `icon="mdi-..."` または `prepend-icon` / `append-icon` を使ってください。
- リスト、設定項目、メニュー、状態表示は `v-list`、`v-list-item`、`v-switch`、`v-checkbox`、`v-select`、`v-text-field`、`v-alert`、`v-progress-linear`、`v-skeleton-loader` などの標準コンポーネントを優先してください。
- タイムラインや記事表示は `v-card`、`v-toolbar`、`v-card-title`、`v-card-text`、`v-card-actions`、`v-infinite-scroll` などで構成し、独自 CSS はスクロール領域や高さ制御など Vuetify だけでは表しにくい部分に限定してください。
- 色、余白、角丸、タイポグラフィは、個別 CSS で直接指定する前に Vuetify theme、semantic color、utility class で表現してください。
- レイアウト崩れや位置揃えの修正では、まず Vuetify コンポーネントの構造、props、slot の使い方、Vuetify utility class の見直しで解決してください。`v-app-bar-title` など内部ラッパーを多く生成するコンポーネントが目的に合わない場合は、`v-app-bar` 内に `d-flex align-center` の単純な行を置くなど、人間が読みやすい HTML 構造へ改めることを優先してください。
- CSS でのレイアウト調整は、Vuetify の構造・props・utility class で表現できない場合に限定してください。特に `:deep(.v-toolbar__content)` のような Vuetify 内部クラスへの細かな上書きは、将来の Vuetify 更新で壊れやすいため最終手段とし、採用する場合は理由をコメントまたは回答で明示してください。
- 高さ・中央揃え・余白などの基本レイアウトは、細かな pixel 補正を積み重ねず、親子構造を単純化して `d-flex`、`align-center`、`justify-*`、`v-spacer`、`v-container`、`v-row`、`v-col` などで意図が読める形にしてください。
- 既存の `src/components/icons` や `src/components/atoms/button` の独自 SVG ボタンは、段階的に MDI アイコン付き `v-btn` へ置き換える対象です。新規コードでは原則として増やさないでください。
- 移行時は画面単位またはコンポーネント単位で小さく進め、旧ストア参照や旧 UI コンポーネントを同時に大きく削除しないでください。削除は参照確認と動作確認後に行ってください。
- Vuetify コンポーネントへ置き換える場合でも、現在の主機能である「情報源ごとの横並びタイムライン」「サイト表示制御」「記事の追加読み込み」「外部リンク・コピー操作」は維持してください。

## ストア移行上の注意

このリポジトリには旧ストアと整理後ストアが併存しています。

- 旧系: `dbStore.ts`, `wsStore.ts`
- 新系: `dbMetaStore.ts`, `siteStore.ts`, `timelineStore.ts`

現在の主要画面 `WsAppView.vue` と `Timeline.vue` は新系ストアを使っています。一方、`AboutView.vue`、`TestView.vue`、`CfgTabBar.vue`、`NewsTimeline.vue`、`SearchedTimeline.vue`、`Timeline_old.vue`、`TlTitleBlock.vue` などには旧系ストア参照が残っています。ストアを整理・削除する場合は、参照箇所を `rg "useDbDataStore|useWsDataStore|dbStore|wsStore"` で確認してから進めてください。

## UI 上の注意

- 本アプリの主画面は、左に設定領域、右に情報源ごとのタイムラインを横スクロールで並べる構成です。
- タイムラインは Firestore の `siteId` ごとに記事をロードし、`epoch` の降順で表示します。
- 記事カードにはタイトル、日付、コピー、外部リンクを表示します。
- スクロール領域は `height: 100%` / `min-height: 0` / flex の組み合わせに依存しているため、親子の高さ指定を不用意に外さないでください。
- 仮置き色やデバッグ境界線として見える `pink` や `red solid` などが残っている箇所は、UI 仕上げ時にプロジェクトの色パレットへ寄せてください。

## テストと確認

- 変更後は最低限 `npm run type-check` を実行してください。
- UI、ルーティング、Firestore 読み込み、Vuetify コンポーネントに触れた場合は `npm run build` も実行してください。
- テストを追加・修正した場合は `npm run test:unit` を実行してください。
- Cypress のサンプルテストは初期テンプレート由来で、現状の画面内容と一致しない可能性があります。E2E を整備する場合は現在の `MiniCrawler` UI に合わせて更新してください。

## 作業時の注意

- ユーザーが作業中の差分を上書きしないでください。
- `.env.local`、Firebase 設定値、秘密情報をコミット・表示しないでください。
- `package-lock.json` は `.gitignore` に含まれていますが、ローカルには存在します。依存関係を変更する場合は、ユーザーの方針を確認してください。
- `node_modules`、`dist`、`.git`、`coverage` は通常の調査対象から除外してください。
