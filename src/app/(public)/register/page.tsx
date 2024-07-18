import Zoom from '@mui/material/Zoom'
import { Register } from './Register'

export default function RegistryPage() {
  return (
    <Zoom in timeout={100}>
      <Register />
    </Zoom>
  )
}
