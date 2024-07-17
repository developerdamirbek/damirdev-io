import { Metadata } from 'next'
import { getMetaData } from '@/helpers/next'
import { MyCertificates } from '@/modules/MyCertificates'

export const metadata: Metadata = getMetaData('My certificates')

export default function MyCertificatesPage() {
  return <MyCertificates />
}
