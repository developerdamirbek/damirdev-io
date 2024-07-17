import React, { SyntheticEvent, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider, IconButton, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import PlayIcon from '@/assets/icons/play_icon.svg'
import { Accordion, AccordionChildType } from '@/components'
import mainDictionary from '@/dictionary'
import { playlistData } from './utils'

import styles from './PlayList.module.scss'

const cn = classNames.bind(styles)

type PlaylistProps = {
  close: VoidFunction
}

export const Playlist = ({ close }: PlaylistProps) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box>
      <Box className={cn('playlist')}>
        <Box className={cn('playlist__header')}>
          <Box className={cn('playlist__header-info')}>
            <Typography variant="h4">Grafic dizayn elementary</Typography>
            <Typography variant="subtitle1">Mavzular soni: 3 ta</Typography>
          </Box>
          <IconButton onClick={close} size="small" aria-label="close" color="primary">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className={cn('playlist__content')}>
          {playlistData.map((item) => (
            <>
              <Divider />

              <Accordion
                key={item.id}
                title={item.name}
                expanded={expanded === `panel${item.id}`}
                onChange={handleChange(`panel${item.id}`)}
                isChild={AccordionChildType.H6}
                actions={
                  <Box className={cn('playlist__content-actions')}>
                    <Box className={cn('playlist__content-actions-info')}>
                      <Typography variant="subtitle2">{mainDictionary.taskCount}</Typography>
                      <Typography variant="subtitle2">{item.videos.length} ta</Typography>
                    </Box>
                    <Box className={cn('playlist__content-actions-info')}>
                      <Typography variant="subtitle2">{mainDictionary.taskTime}</Typography>
                      <Typography variant="subtitle2">{item.lessonTime}</Typography>
                    </Box>
                  </Box>
                }
              >
                <Box className={cn('playlist__child-box')}>
                  {item.videos.map((video, index) => (
                    <>
                      <Box className={cn('playlist__child-list')} key={video.id}>
                        <Box>
                          <PlayIcon />
                        </Box>

                        <Box>
                          <Typography variant="body1">{video.title}</Typography>

                          <Box className={cn('playlist__child-list-info')}>
                            <Typography>{mainDictionary.lessonOrder(video.lessonOrder)}</Typography>

                            <span className={cn('playlist__child-separator')} />

                            <Typography>{mainDictionary.videoDuration}</Typography>

                            <Typography>{video.videoTime}</Typography>
                          </Box>
                        </Box>
                      </Box>
                      {index < item.videos.length - 1 && <Divider />}
                    </>
                  ))}
                </Box>
              </Accordion>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
