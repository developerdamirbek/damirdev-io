import { Box, Button, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import group from '@/assets/group.png'
import mainDictionary from '@/dictionary'

import styles from './Welcome.module.scss'

const cx = classNames.bind(styles)

export const Welcome = () => (
  <Box component="section" className={cx('welcome')}>
    <Box className={cx('welcome__details')}>
      <Typography variant="h1">{mainDictionary.welcomeTitle}</Typography>
      <Typography variant="subtitle2">{mainDictionary.welcomeDescription}</Typography>

      <Button variant="contained" size="large" className={cx('welcome__details-button')}>
        {mainDictionary.welcomeButton}
      </Button>
    </Box>

    <Box display="flex" alignItems="end" justifyContent="end" className={cx('welcome__imageContainer')}>
      <Image src={group} alt="group" className={cx('welcome__imageContainer-image')} />
    </Box>
  </Box>
)
