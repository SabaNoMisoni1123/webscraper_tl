import { describe, it, expect } from 'vitest'

import AppConfig from '@/assets/AppConfig.json'

describe('AppConfig', () => {
  it('defines the application name and version', () => {
    expect(AppConfig.appName).toBe('MiniCrawler')
    expect(AppConfig.version).toBeTruthy()
  })
})
