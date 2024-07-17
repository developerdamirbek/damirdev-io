import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { getMetaData } from '@/helpers/next'
import { PublicLayout } from '@/layouts'

export const metadata: Metadata = getMetaData('Login')

export default async function LoginLayout({ children }: PropsWithChildren) {
  return <PublicLayout>{children}</PublicLayout>
}
