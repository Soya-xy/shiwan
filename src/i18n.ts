import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'zh', 'id', 'ko', 'ms', 'vi', 'ja', 'ru']

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}))

export const localePrefix = 'always' // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
