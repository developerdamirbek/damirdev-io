import mainDictionary from '@/dictionary'
import { PublicCenterBlock } from '@/layouts'
import { Form } from './Form'

export const Forgot = () => (
  <PublicCenterBlock title={mainDictionary.forgotTitle}>
    <Form />
  </PublicCenterBlock>
)
