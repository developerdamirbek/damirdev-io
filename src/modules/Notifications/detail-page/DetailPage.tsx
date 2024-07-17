'use client'

import { Badge, Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import ClockIcon from '@/assets/icons/clock_icon.svg'
import DateIcon from '@/assets/icons/date_icon.svg'
import Img from '@/assets/notification_img.webp'

import styles from './DetailPage.module.scss'

const cn = classNames.bind(styles)

export const DetailPage = () => (
  <Box className={cn('detail')}>
    <Box className={cn('detail__wrapper')}>
      <Typography variant="h3">Title</Typography>

      <Box className={cn('detail__date')}>
        <Box className={cn('detail__date-info')}>
          <DateIcon />
          <Typography variant="subtitle1">28-fevral, 2024-yil</Typography>
        </Box>

        <Box className={cn('detail__date-info')}>
          <ClockIcon />
          <Typography variant="subtitle1">07:22</Typography>
        </Box>
      </Box>
    </Box>

    <Box className={cn('detail__content')}>
      <Box className={cn('detail__img_block')}>
        <Box component={Image} src={Img} alt="img" className={cn('detail__img')} />
      </Box>

      <Box className={cn('detail__content-block')}>
        <Box className={cn('detail__content-list')}>
          <Typography variant="body1" className={cn('detail__text')}>
            Hurmatli Automation Tester, 2/28/2024 da siz Dasturlash kursining ushbu modullarini qo’lga kiritdingiz:
          </Typography>

          <Box className={cn('detail__list')}>
            <Box className={cn('detail__list_item')}>
              <Badge variant="dot" color="primary" />
              <Typography variant="subtitle1">4-modul: TestNo.001</Typography>
            </Box>

            <Box className={cn('detail__list_item')}>
              <Badge variant="dot" color="primary" />
              <Typography variant="subtitle1">5-modul: data science 1-module</Typography>
            </Box>
          </Box>
        </Box>

        <Box className={cn('detail__info-block')}>
          <Typography variant="body1" className={cn('detail__text')}>
            Kursda sizga assistent o’qituvchi biriktiriladi hamda uy vazifalaringiz tekshirilib baholanishi hamda
            darslar davomida sizni qiziqtirgan savol va izohlarga javob berilishi ta’minlanadi. Ushbu kursdan quyidagi
            sabablarga ko’ra faqat 365 kun (1 yil) davomida foydalanishingiz mumkin:
          </Typography>

          <Box className={cn('detail__list')}>
            <Box className={cn('detail__list_item')}>
              <Badge variant="dot" color="primary" />

              <Typography variant="subtitle1">
                Bozor talabining 365 kun (1 yil) davomida yetarlicha o‘zgarishi.
              </Typography>
            </Box>

            <Box className={cn('detail__list_item')}>
              <Badge variant="dot" color="primary" />
              <Typography variant="subtitle1">Kursning vaqt o‘tishi bilan o‘zgarishi.</Typography>
            </Box>

            <Box className={cn('detail__list_item')}>
              <Badge variant="dot" color="primary" />
              <Typography variant="subtitle1">Kurs tarkibiga kiruvchi ma’lumotlarni himoyalash.</Typography>
            </Box>
          </Box>
          <Typography variant="body1" className={cn('detail__text')}>
            Najot Ta’lim jamoasi Dasturlash kursini o’rganishda sizga omad va muvaffaqiyat tilaydi.
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
)
