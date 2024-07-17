import { Box, Card, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/monoLogo.png'
import mainDictionary from '@/dictionary'

import style from './Certificates.module.scss'

const cn = classNames.bind(style)

type Props = {
  notComplete?: string
  href?: string
}

export const CertificateCard = ({ notComplete, href }: Props) => (
  <Box component={Link} href={href || ''}>
    <Card className={cn('certificateCard')}>
      {notComplete && (
        <Box className={cn('certificateCard__notComplete', { notComplete })}>
          <Typography variant="h3">{notComplete}</Typography>
        </Box>
      )}

      <Box component="section" className={cn('certificateCard__container')}>
        <Box component={Image} className={cn('certificateCard__container-logo')} src={Logo} alt="logo" />

        <Box>
          <Typography variant="h2">{mainDictionary.certificateCourse}</Typography>

          <Typography variant="caption">{mainDictionary.certificateCourse}</Typography>
        </Box>

        <Box>
          <Typography variant="body1">{mainDictionary.courseAuthor}</Typography>
        </Box>
      </Box>
    </Card>
  </Box>
)
