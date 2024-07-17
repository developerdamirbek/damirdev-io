import mainDictionary from '@/dictionary'
import { PublicCenterBlock } from '@/layouts'
import { Form } from './Form'

export const Login = () => (
  <PublicCenterBlock title={mainDictionary.loginTitle}>
    <Form />
  </PublicCenterBlock>
)
