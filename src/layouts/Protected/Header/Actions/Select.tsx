import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, MenuItem, Select } from '@mui/material'
import { headerRightStyles } from './right-side.style'

type Option = {
  value: string
  label: string
}

type Props = {
  option: Option[]
}

export const SelectComponents = ({ option }: Props) => (
  <Box>
    <Select
      sx={headerRightStyles.language}
      defaultValue={option?.[0]?.value}
      size="small"
      IconComponent={KeyboardArrowDownIcon}
    >
      {option?.map((item: Option) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  </Box>
)
