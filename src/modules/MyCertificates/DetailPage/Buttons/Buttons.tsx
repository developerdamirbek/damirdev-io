'use client'

import { Button, IconButton, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import classNames from 'classnames/bind'
import DownloadIcon from '@/assets/icons/download.svg'
import InfoIcon from '@/assets/icons/Info.svg'
import ShereIcon from '@/assets/icons/Shere.svg'
import mainDictionary from '@/dictionary'

import style from './Button.module.scss'

export const DetailButton = () => {
  const isMedia = useMediaQuery('(min-width:450px)')
  const cn = classNames.bind(style)

  return (
    <Box className={cn('detailButton')}>
      {!isMedia ? (
        <Box className={cn('detailButton__container')}>
          <IconButton size="medium" className={cn('detailButton__button')}>
            <DownloadIcon />
          </IconButton>

          <IconButton size="medium" className={cn('detailButton__button')}>
            <InfoIcon />
          </IconButton>

          <IconButton size="medium" className={cn('detailButton__button')}>
            <ShereIcon />
          </IconButton>
        </Box>
      ) : (
        <Box className={cn('detailButton__container')}>
          <Button variant="contained" color="primary" startIcon={<DownloadIcon />}>
            <Typography variant="body1">{mainDictionary.download}</Typography>
          </Button>

          <Button variant="contained" color="primary" startIcon={<InfoIcon />}>
            <Typography variant="body1">{mainDictionary.info}</Typography>
          </Button>

          <Button variant="contained" color="primary" startIcon={<ShereIcon />}>
            <Typography variant="body1">{mainDictionary.shere}</Typography>
          </Button>
        </Box>
      )}
    </Box>
  )
}
