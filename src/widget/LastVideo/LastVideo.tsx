import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { Select } from '@/components/Select'
import ImageLastVideo from './assets/image.webp'
import { ListOption, ProgressOption, SelectOptions } from './components'
import { List } from './components/List'
import { CustomizedProgressBars } from './components/Progress'
import { mainDictionary } from './dictionnary'

import styles from './LastVideo.module.scss'

const cx = classNames.bind(styles)

export const LastVideo = () => (
  <Box component="section" className={cx('last-video')}>
    <Box className={cx('last-video__header')}>
      <Typography variant="h2" className={cx('last-video__header-title')}>
        {mainDictionary.lastVideo}
      </Typography>

      <Box className={cx('last-video__header-select')}>
        <Select option={SelectOptions.course} />

        <Select option={SelectOptions.marketing} />
      </Box>
    </Box>

    <Box className={cx('last-video__middle')}>
      <Box
        component={Image}
        src={ImageLastVideo}
        layout="responsive"
        alt="background"
        className={cx('last-video__middle-image')}
      />

      <Box className={cx('last-video__middle-list')}>
        <Typography variant="h3" className={cx('last-video__middle-list-h3')}>
          {mainDictionary.title}
        </Typography>

        <List option={ListOption} />
      </Box>
    </Box>

    <Box>
      <Typography>{mainDictionary.pro(ProgressOption)}</Typography>

      <CustomizedProgressBars value={ProgressOption} />
    </Box>
  </Box>
)
