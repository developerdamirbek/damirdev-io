'use client'

import MuiCheckbox from '@mui/material/Checkbox'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Checkbox = () => <MuiCheckbox {...label} defaultChecked />

export { Checkbox }
