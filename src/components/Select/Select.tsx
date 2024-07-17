import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { MenuItem, Select as MuiSelect, SelectProps } from '@mui/material'

type Option = {
  value: string
  label: string
}

type Props = {
  option: Option[]
  onChange?: SelectProps['onChange']
}

export const Select = ({ option, onChange }: Props) => (
  <MuiSelect defaultValue={option?.[0]?.value} size="small" IconComponent={KeyboardArrowDownIcon} onChange={onChange}>
    {option?.map((item: Option) => (
      <MenuItem key={item.value} value={item.value}>
        {item.label}
      </MenuItem>
    ))}
  </MuiSelect>
)
