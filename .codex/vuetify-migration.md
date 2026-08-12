# Vuetify Migration Policy

このプロジェクトでは、UI の中心を Vuetify 3 に寄せる方針です。目的は、素の HTML/CSS と独自 SVG コンポーネントが増えている状態を整理し、コンポーネント構造の可読性、画面操作の一貫性、レスポンシブ対応、保守性を改善することです。

## 基本方針

- 新規 UI は原則として Vuetify コンポーネントで作成する。
- 既存 UI の改修では、対象コンポーネントを読み、Vuetify に置き換えられる要素を優先的に置換する。
- 独自 CSS は、レイアウトの高さ、横スクロール、タイムラインの固定サイズ、局所的な調整など、Vuetify の標準機能だけでは不足する箇所に絞る。
- `ColorPallet.json` にあるブランド色は、直接 CSS に散らさず、できるだけ `src/vuetify.ts` の theme / semantic color に集約する。
- 見た目だけの移行ではなく、ユーザー操作の明確さも改善する。例: アイコンボタン、ローディング、空状態、エラー状態、設定フォーム。

## 置き換え候補

現在の独自 UI から Vuetify へ移行しやすい候補:

- `src/components/atoms/button/*.vue`: MDI アイコン付き `v-btn` へ置換。
- `src/components/atoms/bar/*.vue`: `v-toolbar`、`v-toolbar-title`、`v-card-title` へ置換。
- `src/components/atoms/box/ItemBox.vue`: `v-card-text` などへ統合。
- `src/components/molecules/ArticleItemNoButton.vue`: `ArticleItem.vue` 側へ統合し、`v-card` ベースへ寄せる。
- `src/components/molecules/SearchForm.vue`: `v-text-field`、`v-select`、`v-btn`、`v-row` / `v-col` へ置換。
- `src/components/organisms/CfgTabBar.vue`: `v-navigation-drawer`、`v-list`、`v-switch`、`v-select`、`v-btn` へ置換。
- `src/components/organisms/Timeline_old.vue`: 新しい `Timeline.vue` へ統合し、削除候補にする。
- `src/components/organisms/NewsTimeline.vue` / `SearchedTimeline.vue`: 旧ストア依存を整理し、必要なら Vuetify ベースで再実装する。

## 推奨コンポーネント対応

- アプリ枠: `v-app`, `v-app-bar`, `v-navigation-drawer`, `v-main`, `v-footer`
- レイアウト: `v-container`, `v-row`, `v-col`, `v-spacer`, flex utility
- 操作: `v-btn`, `v-btn-toggle`, `v-icon`, `v-tooltip`
- 設定: `v-switch`, `v-checkbox`, `v-select`, `v-text-field`, `v-slider`
- 表示: `v-card`, `v-toolbar`, `v-list`, `v-list-item`, `v-chip`
- 状態: `v-progress-linear`, `v-progress-circular`, `v-skeleton-loader`, `v-alert`, `v-empty-state` 相当の表現
- 追加読み込み: `v-infinite-scroll`

## 移行順の目安

1. 既に新系ストアを使っている `WsAppView.vue`、`Timeline.vue`、`ArticleItem.vue` を Vuetify ベースとして安定させる。
2. `WsConfigView.vue` を設定パネルとして整え、`v-btn`、`v-navigation-drawer`、`v-list` などに寄せる。
3. `SearchForm.vue`、`TlTitleBlock.vue` など、操作フォーム・設定部品を Vuetify 化する。
4. 旧ストア依存の `CfgTabBar.vue`、`Timeline_old.vue`、`NewsTimeline.vue`、`SearchedTimeline.vue` の利用状況を確認し、移行または削除を判断する。
5. 独自 SVG アイコンボタンを削減し、MDI アイコンと Vuetify の標準 props に寄せる。

## 作業時の確認ポイント

- 横並びタイムラインのスクロールが維持されているか。
- AppBar / Footer を除いたメイン領域の高さが崩れていないか。
- モバイル幅でボタンやテキストがはみ出していないか。
- ローディング、空状態、Firestore 取得失敗時の表示が破綻していないか。
- `npm run type-check` と、UI に触れた場合の `npm run build` が通るか。

## Context7 確認メモ

2026-04-28 に Context7 MCP で Vuetify の情報を確認しました。選択したライブラリ ID は `/vuetifyjs/vuetify` です。確認した要点:

- Vuetify は `v-app`、`v-app-bar`、`v-navigation-drawer`、`v-main`、`v-footer` によるアプリ骨格を提供している。
- `v-btn` の `icon`、`v-list-item` の `prepend-icon`、`v-spacer`、`v-container` と flex utility による配置が標準的に使える。
- theme は Vuetify 側で管理でき、必要に応じて `useTheme` で切り替えや色参照ができる。
