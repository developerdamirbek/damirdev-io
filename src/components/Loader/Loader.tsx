import classNames from 'classnames/bind'

import styles from './loader.module.scss'

const cx = classNames.bind(styles)

export const Loader = () => <span className={cx('loader')} />
