import * as React from 'react'
import { LinearProgress } from '@mui/material'
import Stack from '@mui/material/Stack'

type Prop = {
  value: number
}

export const CustomizedProgressBars = ({ value }: Prop) => (
  <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <LinearProgress variant="determinate" value={value} />
  </Stack>
)
