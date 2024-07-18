import registryDictionary from '@/dictionary'
import { PublicCenterBlock } from '@/layouts'
import { Form } from './Form'

export const Register = () => (
  <PublicCenterBlock title={registryDictionary.registryTitle}>
    <Form />
  </PublicCenterBlock>
)
