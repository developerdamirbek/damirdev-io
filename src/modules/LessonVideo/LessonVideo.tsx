'use client'

import { SyntheticEvent, useState } from 'react'
import { Box, Button, Drawer, IconButton, Tab, Tabs, useMediaQuery } from '@mui/material'
import classNames from 'classnames/bind'
import ListIcon from '@/assets/icons/list_icon.svg'
import SaveIcon from '@/assets/icons/save_icon.svg'
import { WidgetHeader, WidgetHeaderType } from '@/components'
import { CustomTabPanel } from '@/components/CustomTab'
import mainDictionary from '@/dictionary'
import { Video } from '@/widget/Video'
import { LessonAssignment } from './components/LessonAssignment'
import { Playlist } from './components/Playlist'
import { tabPanels, tabs } from './constants/tabConfig'

import styles from './LessonVideo.module.scss'

const cn = classNames.bind(styles)

export const LessonVideo = () => {
  const [value, setValue] = useState(0)
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)
  const showPlaylist = useMediaQuery('(max-width:1024px)')
  const isMobile = useMediaQuery('(max-width:640px)')

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const togglePlaylist = () => {
    setIsPlaylistOpen((prevState) => !prevState)
  }

  return (
    <Box className={cn('lesson-video')}>
      <Box className={cn('video__header')}>
        <WidgetHeader
          type={WidgetHeaderType.Row}
          // TODO: title will change when api will be ready
          goBackTitle="Grafik dizayn kursi"
          title="1-dars grafik dizayn"
          actions={
            <Box className={cn('lesson-video__header-actions')}>
              <IconButton size={isMobile ? 'medium' : 'large'} color="secondary">
                <SaveIcon />
              </IconButton>
              <LessonAssignment />
              {isMobile ? (
                <IconButton onClick={togglePlaylist} size="medium" color="inherit">
                  <ListIcon />
                </IconButton>
              ) : (
                <Box className={cn('lesson-video__playlist-button')}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<ListIcon />}
                    onClick={togglePlaylist}
                  >
                    {mainDictionary.playlist}
                  </Button>
                </Box>
              )}
            </Box>
          }
        />
      </Box>
      <Box className={cn('lesson-video__content')}>
        <Box flex="1">
          <Video src="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </Box>
        {!showPlaylist && isPlaylistOpen && (
          <Box className={cn('lesson-video__playlist-box')}>
            <Playlist close={togglePlaylist} />
          </Box>
        )}
      </Box>
      <Box>
        <Box className={cn('lesson-video__tabs')}>
          <Box className={cn('lesson-video__tabs-header')}>
            <Tabs
              scrollButtons="auto"
              variant={isMobile ? 'scrollable' : 'fullWidth'}
              className={cn('lesson-video__tab')}
              value={value}
              onChange={handleChange}
              aria-label="scrollable auto  tabs example"
            >
              {tabs.map(({ icon: Icon, id, label, ...tab }) => (
                <Tab
                  key={id}
                  className={cn('lesson-video__tabs-tab')}
                  icon={
                    <Box className={cn('lesson-video__tabs-icon')}>
                      <Icon />
                    </Box>
                  }
                  iconPosition="start"
                  label={label}
                  {...tab}
                />
              ))}
            </Tabs>
          </Box>
          <Box className={cn('lesson-video__tabs-body')}>
            {tabPanels.map(({ children: Children, id }) => (
              <CustomTabPanel key={id} value={value} index={id}>
                {<Children />}
              </CustomTabPanel>
            ))}
          </Box>
        </Box>
      </Box>
      <Drawer anchor="right" open={showPlaylist && isPlaylistOpen} onClose={togglePlaylist}>
        <Box className={cn('lesson-video__playlist')} role="presentation">
          <Playlist close={togglePlaylist} />
        </Box>
      </Drawer>
    </Box>
  )
}
