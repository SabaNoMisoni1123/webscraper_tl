# MagnumCrawler

【開発中】

This template should help get you started developing with Vue 3 in Vite.

## プロジェクト概要

### 概要

官公庁ウェブサイトから日々チェックしたい情報を収集し、ライムライン形式でまとめるサイトです。
Web スクレイプの機能は、[別のレポジトリ(https://github.com/SabaNoMisoni1123/websc_ministry)](https://github.com/SabaNoMisoni1123/websc_ministry)で実装し、[Render](https://render.com/)を利用してデプロイしました。

### 目的

複数の官公庁ウェブサイトにまたがる、チェックしたい情報をTwitterのタイムラインのような形式でまとめ、情報収集をより容易にすることを目的としています。

Webスクレイプ機能を、[別レポジトリ](https://github.com/SabaNoMisoni1123/websc_ministry)に集約することで、本レポジトリでは、タイムライン形式での表示機能のみを取り扱います。

Webスクレイプ機能は、APIとして公開する想定で、メール配信やチャットBotへの利用など、様々な用途に利用できるように、実装する予定です。

## アクセス方法

Github pagesにて公開中です。以下のURLからアクセスが可能です。

[https://sabanomisoni1123.github.io/webscraper_tl/](https://sabanomisoni1123.github.io/webscraper_tl/)

## ライセンス

当ライセンスは MIT ライセンスの規約に基づいて付与されています。

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
