import { Box, Card, Chip, LinearProgress, Stack, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import mainDictionary from '@/dictionary'

import styles from './MyCareersCard.module.scss'

const cn = classNames.bind(styles)
const cardGap = '15px'

type Props = {
  categoryNames?: string[]
  href: string
  imageSrc?: StaticImageData // this should be string after testing when backend will be ready
  progressValue?: number
  title: string
}

export const MyCareersCard = ({ categoryNames, href, imageSrc, progressValue, title }: Props) => (
  <Stack component={Link} direction="column" gap={cardGap} className={cn('card')} href={href}>
    <Card className={cn('card__image-wrapper')}>
      {imageSrc && (
        <Box component={Image} layout="responsive" src={imageSrc} alt={title} className={cn('card__image')} />
      )}
    </Card>

    <Box>
      {categoryNames?.length && (
        <Stack sx={{ marginBottom: '10px' }} direction={'row'} spacing={1}>
          {categoryNames.map((name) => (
            <Chip key={name} variant="outlined" color="primary" label={name} />
          ))}
        </Stack>
      )}

      <Typography variant="h6">{title}</Typography>
    </Box>

    {progressValue && (
      <Box className={cn('card__progress')}>
        <Stack direction="column" gap="10px">
          <Typography variant="subtitle2" className={cn('card__progress-title')}>
            {mainDictionary.pro(progressValue)}
          </Typography>

          <LinearProgress variant="determinate" value={progressValue} />
        </Stack>
      </Box>
    )}
  </Stack>
)
