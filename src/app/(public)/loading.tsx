import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
  return (
    <Box height="100%" width="100%" alignContent="center" justifyContent="center" display="grid">
      <CircularProgress />
    </Box>
  )
}
