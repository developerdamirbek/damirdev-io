'use client'

import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { Box, Button, IconButton, Rating, useMediaQuery } from '@mui/material'
import classNames from 'classnames/bind'
import { useBoolean } from 'usehooks-ts'
import { Modal } from '@/components'
import mainDictionary from '@/dictionary'
import { Inbox } from '../Inbox'

import styles from './LessonAssignment.module.scss'

const cn = classNames.bind(styles)

export const LessonAssignment = () => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()
  const isMobile = useMediaQuery('(max-width:640px)')

  return (
    <Box>
      {isMobile ? (
        <IconButton onClick={open} color="secondary" size="medium">
          <StarIcon />
        </IconButton>
      ) : (
        <Box className={cn('assignment__button')}>
          <Button fullWidth onClick={open} size="medium" startIcon={<StarIcon />} color="primary">
            {mainDictionary.assignLesson}
          </Button>
        </Box>
      )}
      <Box>
        <Modal isOpen={isOpen} onClose={close} title="Darsni baholang">
          <Box className={cn('assignment__modal')}>
            <Rating
              emptyIcon={<StarIcon style={{ fontSize: '34px' }} color="secondary" />}
              size="large"
              color="primary"
              name="no-value"
              value={null}
            />

            <Inbox placeholder="Izoh" />
          </Box>
        </Modal>
      </Box>
    </Box>
  )
}
