import type { Viewport } from 'next'

import '~/styles/index.css'

import { ToastContainer } from 'react-toastify'

import { AntdRegistry } from '@ant-design/nextjs-registry'

import { HydrationEndDetector } from '~/components/common/HydrationEndDetector'
import { ScrollTop } from '~/components/common/ScrollTop'
import { attachUAAndRealIp } from '~/lib/attach-ua'
import { sansFont, serifFont } from '~/lib/fonts'

import { Providers } from '../../providers/root'
import { ClientInit } from '../ClientInit'
import { init } from '../init'
import { InitInClient } from '../InitInClient'

init()

export const revalidate = 60

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#000212' },
      { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    ],
  }
}

export const generateMetadata = async () => {
  const url = {
    webUrl: 'https://MyGame.in',
    apiUrl: 'https://MyGame.ren',
  }
  const seo = {
    title: 'My Game',
    description: 'My Game',
    keywords: ['My Game', 'My Game', '博客', 'blog', 'nextjs', 'react'],
  }
  const user = {
    username: 'My Game',
    name: 'My Game',
    avatar: '',
  }
  return {
    metadataBase: new URL(url.webUrl),
    title: {
      template: `%s - ${seo.title}`,
      default: `${seo.title} - ${seo.description}`,
    },
    description: seo.description,
    keywords: seo.keywords?.join(',') || '',
    icons: [],

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: {
        default: seo.title,
        template: `%s | ${seo.title}`,
      },
      description: seo.description,
      siteName: `${seo.title}`,
      locale: 'zh',
      type: 'website',
      url: url.webUrl,
      images: {
        url: user.avatar,
        username: user.name,
      },
    },
    twitter: {
      creator: `@${user.username}`,
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: any
}) {
  attachUAAndRealIp()

  return (
    <>
      <ClientInit />
      <html lang={locale} suppressHydrationWarning>
        <head>
          <HydrationEndDetector />
        </head>
        <body
          className={`${sansFont.className} ${serifFont.className} m-0 h-full p-0 font-sans`}
        >
          <Providers>
            <div data-theme>
              <div>
                <div className="font-roboto flex h-screen bg-gray-100 dark:bg-gray-800">
                  <div className="fixed inset-y-0 left-0 z-30 w-60 transform overflow-y-auto bg-white transition duration-300 lg:static lg:inset-0 lg:translate-x-0 dark:bg-gray-900">
                    <div className="mt-8 flex items-center justify-center">
                      <div className="flex items-center">
                        <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                          Dashboard
                        </span>
                      </div>
                    </div>
                    <nav className="mt-10 flex flex-col px-4 text-center">
                      <a
                        href="/admin"
                        className="rounded  py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100"
                      >
                        游戏列表
                      </a>
                      <a
                        href="/admin/banner"
                        className="mt-3 rounded py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                      >
                        轮播图列表
                      </a>
                    </nav>
                  </div>
                  <div className="flex flex-1 flex-col overflow-hidden">
                    <main className="flex-1 overflow-y-auto overflow-x-hidden">
                      <div className="mx-5 px-6 py-8">
                        <div className="grid h-full place-items-center text-xl text-gray-500 dark:text-gray-300">
                          <AntdRegistry>{children}</AntdRegistry>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </Providers>
          <ToastContainer />
          <ScrollTop />
          <InitInClient />
        </body>
      </html>
    </>
  )
}
