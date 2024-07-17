import 'dayjs/locale/ru'
import '@/styles/global.css'

import { PropsWithChildren } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants'
import { Providers } from '@/providers'
import { MainLayout } from '../layouts'

dayjs.locale('en')

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>
            <MainLayout>{children}</MainLayout>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
