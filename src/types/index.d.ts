import type { langPath } from '@/utils/ui'

type Exclude<T, U> = T extends U ? never : T

export interface ThemeConfig {

  site: {
    title: string
    subtitle: string
    description: string
    author: string
    url: string
    favicon: string
  }

  color: {
    mode: 'light' | 'dark'
    light: {
      primary: string
      secondary: string
      background: string
      codeTheme: string
    }
    dark: {
      primary: string
      secondary: string
      background: string
      codeTheme: string
    }
  }

  global: {
    locale: typeof langPath[number]
    moreLocale: typeof langPath[number][]
    fontStyle: 'sans' | 'serif'
    titleSpace: 1 | 2 | 3
  }

  comment?: {
    waline?: {
      serverURL?: string
      emoji?: string[]
      searchGif?: boolean
      imageUploader?: boolean
    }
  }

  seo?: {
    twitterID?: string
    verification?: {
      google?: string
      bing?: string
      yandex?: string
      baidu?: string
    }
    googleAnalyticsID?: string
    umamiAnalyticsID?: string
    follow?: {
      feedID?: string
      userID?: string
    }
  }

  footer: {
    linkA: {
      name: string
      url: string
    }
    linkB: {
      name: string
      url: string
    }
    linkC: {
      name: string
      url: string
    }
    startYear: string
  }

  preload: {
    commentURL?: string
    imageHostURL?: string
    customGoogleAnalyticsJS?: string
    customUmamiAnalyticsJS?: string
  }
}

export default ThemeConfig
