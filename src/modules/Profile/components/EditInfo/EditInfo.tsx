'use client'

import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, IconButton, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import { useBoolean } from 'usehooks-ts'
import * as z from 'zod'
import EditIcon from '@/assets/icons/edit_icon.svg'
import InfoIcon from '@/assets/icons/info_icon.svg'
import { Modal } from '@/components'
import { Avatar } from '@/components/Avatar'
import { AvatarType } from '@/components/Avatar/types'
import { Select } from '@/components/Select'
import { maxLength, minLength } from '@/constants'
import mainDictionary from '@/dictionary'
import { days, defaultValue, months, years } from '@/modules/Profile/constants'
import { Gender, InfoFormValues } from '@/modules/Profile/types'
import { FormControlField, FormProvider, RHFTextField } from '@/shared/form-controls'
import { DeleteAvatar } from '../DeleteAvatar'
import { EditAvatar } from '../EditAvatar'
import { ViewAvatar } from '../ViewAvatar'

import styles from './EditInfo.module.scss'

const cn = classNames.bind(styles)

const formSchema = z.object({
  name: z.string().trim().min(minLength, mainDictionary.minNameError).max(maxLength),
  surname: z.string().trim().min(minLength, mainDictionary.minSurnameError).max(maxLength),
  dateOfBirth: z.object({
    day: z.string().nonempty(mainDictionary.dayError),
    month: z.string().nonempty(mainDictionary.monthError),
    year: z.string().nonempty(mainDictionary.yearError),
  }),
  gender: z.enum([Gender.Man, Gender.Woman]),
})

export const EditInfo = () => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()

  const methods = useForm<InfoFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultValue.name,
      surname: defaultValue.surname,
      dateOfBirth: {
        day: defaultValue.dateOfBirth?.day,
        month: defaultValue.dateOfBirth?.month,
        year: defaultValue.dateOfBirth?.year,
      },
      gender: defaultValue.gender,
    },
  })

  const {
    formState: { isSubmitting },
  } = methods

  const handleSubmit = () => {
    // TODO: Submit logic here
    close()
  }

  return (
    <Box>
      <IconButton size="medium" color="secondary" onClick={open}>
        <EditIcon />
      </IconButton>
      <Modal isOpen={isOpen} onClose={close} title={mainDictionary.personalInfo}>
        <Box component={FormProvider} className={cn('form')} methods={methods} onSubmit={handleSubmit} fullWidth>
          <FormControlField label={''}>
            <Box className={cn('form__avatar')}>
              <Avatar
                size={AvatarType.Large}
                actions={
                  <Box className={cn('form__avatar_actions')}>
                    <EditAvatar />
                    <ViewAvatar />
                    <DeleteAvatar />
                  </Box>
                }
                isBorder
              />
            </Box>
          </FormControlField>
          <FormControlField label={mainDictionary.name}>
            <RHFTextField name="name" isClearableField={false} disabled variant="filled" />
          </FormControlField>

          <FormControlField label={mainDictionary.surname}>
            <RHFTextField isClearableField={false} name="surname" disabled variant="filled" />
          </FormControlField>
          <FormControlField label={mainDictionary.dateOfBirth}>
            <Box className={cn('form__date_picker')}>
              <Select option={days} />
              <Select option={months} />
              <Select option={years} />
            </Box>
          </FormControlField>
          <FormControlField label={mainDictionary.gender}>
            <Select
              option={[
                { label: Gender.Man, value: Gender.Man },
                { label: Gender.Woman, value: Gender.Woman },
              ]}
            />
          </FormControlField>
          <Box className={cn('form__info')}>
            <Box>
              <InfoIcon />
            </Box>
            <Box>
              <Typography variant="body2">
                {mainDictionary.changeInfoNote}
                <a target="_blank" className={cn('form__info_link')} href="#">
                  {mainDictionary.supportService}
                </a>
                {mainDictionary.fixInfo}
              </Typography>
            </Box>
          </Box>
          <Box>
            <LoadingButton fullWidth variant="contained" type="submit" loading={isSubmitting}>
              {mainDictionary.saveChanges}
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
