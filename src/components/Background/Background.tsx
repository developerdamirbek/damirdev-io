import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Background.module.scss'

const cx = classNames.bind(styles)

export const Background = () => <Box className={cx('background')} />
