import { Metadata } from 'next'
import { getMetaData } from '@/helpers/next'
import { DetailPage } from '@/modules/MyCertificates'

export const metadata: Metadata = getMetaData('Detail')

export default function CertificatesDetail() {
  return <DetailPage />
}
