import { describe, it, expect } from 'vitest'

import AppConfig from '@/assets/AppConfig.json'

// 初期テンプレートの HelloWorld ではなく、このアプリの設定 JSON を最低限検証します。
describe('AppConfig', () => {
  it('defines the application name and version', () => {
    expect(AppConfig.appName).toBe('MiniCrawler')
    expect(AppConfig.version).toBeTruthy()
  })
})
