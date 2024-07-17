import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'

import styles from './Logo.module.scss'

const cx = classNames.bind(styles)
const LogoSrc = '/edfix-logo.svg'

type Props = {
  width?: number
  height?: number
}

export const Logo = ({ width = 160, height = 120 }: Props) => (
  <Box className={cx('logo')} style={{ width, height }}>
    <Image src={LogoSrc} alt="EdFix" title="EdFix" className={cx('logo__img')} width={width} height={height} priority />
  </Box>
)
