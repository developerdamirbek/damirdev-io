import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { getMetaData } from '@/helpers/next'
import { ProtectedLayout } from '@/layouts'

export const metadata: Metadata = getMetaData('Dashboard')

export default async function LoginLayout({ children }: PropsWithChildren) {
  return <ProtectedLayout>{children}</ProtectedLayout>
}
