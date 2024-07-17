import Zoom from '@mui/material/Zoom'
import { Login } from './Login'

export default function LoginPage() {
  return (
    <Zoom in timeout={100}>
      <Login />
    </Zoom>
  )
}
