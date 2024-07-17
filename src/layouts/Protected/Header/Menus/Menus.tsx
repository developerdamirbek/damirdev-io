import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU_LINKS } from '../constants'

import styles from './menus.module.scss'

const cx = classNames.bind(styles)

export const Menus = () => {
  const pathName = usePathname()

  return (
    <Box component="nav" className={cx('menus')}>
      {MENU_LINKS.map((item) => (
        <Link
          className={cx('menus__item', { 'menus__item--active': pathName === item.link })}
          key={item.link}
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
    </Box>
  )
}
