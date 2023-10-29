# webscraper_tl

【開発中】

This template should help get you started developing with Vue 3 in Vite.

## プロジェクト概要

### 概要

官公庁の web サイトが日々更新する情報を自動で取得し、タイムライン形式でまとめるアプリケーション。

### 目的

~~官公庁サイトは見やすいとは言えないため、~~官公庁サイトが日々更新する情報をタイムライン形式にまとめることで、閲覧しやすくすることを目的とする。 web スクレイプの機能は、別で実装されているため、しばらくは集められた情報をタイムライン形式に表示させるフロント側の開発を中心に進める。最終的には、特定の官公庁のサイトを指定したうえでの web スクレイプ機能や、 Electron を利用したデスクトップアプリ化を想定している。


## 使用法用

開発中につき使用不可。

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
