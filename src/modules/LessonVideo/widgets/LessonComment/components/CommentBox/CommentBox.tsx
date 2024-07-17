import React, { useState } from 'react'
import { Box, Button, IconButton, InputBase, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { useBoolean } from 'usehooks-ts'
import ArrowDownIcon from '@/assets/icons/arrow_down.svg'
import ArrowUpIcon from '@/assets/icons/arrow_up.svg'
import DangerTriangleIcon from '@/assets/icons/danger_triangle_icon.svg'
import DeleteIcon from '@/assets/icons/delete_icon.svg'
import EditIcon from '@/assets/icons/edit_icon.svg'
import RedoIcon from '@/assets/icons/redo_icon.svg'
import { Avatar, Modal } from '@/components'
import { AvatarType } from '@/components/Avatar/types'
import mainDictionary from '@/dictionary'

import styles from './CommentBox.module.scss'

const cn = classNames.bind(styles)

type CommentProps = {
  comment: string
  author: string
  avatar: string
  date: string
  isEdited?: boolean
  status: 'mycomment' | 'comment'
}

export const CommentBox = ({ comment, author, avatar, date, isEdited, status }: CommentProps) => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()
  const { setFalse: closeDelete, setTrue: openDelete, value: isOpenDelete } = useBoolean()
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)

  const handleUpClick = () => {
    if (!clicked) {
      setCount((prevCount) => prevCount + 1)
      setClicked(true)
    }
  }

  const handleDownClick = () => {
    if (!clicked) {
      setCount((prevCount) => prevCount - 1)
      setClicked(true)
    }
  }

  return (
    <Box className={cn('comment-box')}>
      <Box className={cn('comment-box__wrapper')}>
        <Box className={cn('comment-box__info')}>
          <Box className={cn('comment-box__author')}>
            <Avatar bordered variant={AvatarType.Small} src={avatar} />
            <Typography variant="h4">{author}</Typography>
          </Box>
          <Box className={cn('comment-box__date')}>
            <Typography variant="subtitle1">{date}</Typography>
            {isEdited && <Typography variant="subtitle1">{mainDictionary.edited}</Typography>}
          </Box>
        </Box>
        <Box>
          <Typography variant="body1">{comment}</Typography>
          {status === 'mycomment' ? (
            <Box className={cn('comment-box__actions')}>
              <Button variant="text" color="primary" startIcon={<EditIcon />}>
                {mainDictionary.edit}
              </Button>
              <Button onClick={openDelete} color="error" variant="text" startIcon={<DeleteIcon />}>
                {mainDictionary.delete}
              </Button>
            </Box>
          ) : (
            <Box className={cn('comment-box__actions')}>
              <Button variant="text" color="primary" startIcon={<RedoIcon />}>
                {mainDictionary.reply}
              </Button>
              <Button onClick={open} variant="text" startIcon={<DangerTriangleIcon />}>
                {mainDictionary.complaint}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <Box className={cn('comment-box__scrollbar')}>
        <IconButton onClick={handleUpClick} size="small">
          <ArrowUpIcon />
        </IconButton>
        <span>{count}</span>
        <IconButton onClick={handleDownClick} size="small">
          <ArrowDownIcon />
        </IconButton>
      </Box>
      <Modal isOpen={isOpen} onClose={close} title={mainDictionary.complaint}>
        <Box className={cn('comment-box__modal-content')}>
          <Box>
            <Typography variant="button">{mainDictionary.complaintToAdminstrator}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">{mainDictionary.complaintText}</Typography>
            <Box className={cn('comment-box__input')}>
              <InputBase fullWidth placeholder={mainDictionary.complaintText} multiline rows={6} />
            </Box>
          </Box>
          <Box className={cn('comment-box__modal')}>
            <Button fullWidth variant="contained" color="secondary">
              {mainDictionary.cancel}
            </Button>
            <Button fullWidth variant="contained" color="primary">
              {mainDictionary.send}
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal isOpen={isOpenDelete} onClose={closeDelete} title={mainDictionary.deleteComment}>
        <Box className={cn('comment-box__modal')}>
          <Button fullWidth variant="contained" color="secondary">
            {mainDictionary.no}
          </Button>
          <Button fullWidth variant="contained" color="primary">
            {mainDictionary.yes}
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}
