import { Clear } from '@mui/icons-material'
import { IconButton, InputAdornment, InputAdornmentProps } from '@mui/material'

type ClearEndAdornmentProps = InputAdornmentProps & {
  isVisibleClearButton: boolean
  onClear?: VoidFunction
}

export const ClearAdornment = ({ isVisibleClearButton, onClear, ...restAdornmentProps }: ClearEndAdornmentProps) => {
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <InputAdornment {...restAdornmentProps}>
      <IconButton
        onMouseDown={handleMouseDown}
        onClick={onClear}
        size="small"
        sx={{ display: isVisibleClearButton ? null : 'none' }}
      >
        <Clear fontSize="small" />
      </IconButton>
    </InputAdornment>
  )
}
