// 設定ペインで扱うカテゴリ定義。タブ・アイコンレール・window の value を共通化します。
export type ConfigSection = 'search' | 'news' | 'settings'

export interface ConfigSectionItem {
  value: ConfigSection
  label: string
  icon: string
}

export const CONFIG_SECTIONS: ConfigSectionItem[] = [
  { value: 'search', label: '検索', icon: 'mdi-magnify' },
  { value: 'news', label: '新規情報', icon: 'mdi-new-box' },
  { value: 'settings', label: '表示設定', icon: 'mdi-cog' },
]
