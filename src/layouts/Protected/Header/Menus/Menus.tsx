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
      {MENU_LINKS.map(({ title, link, icon: Icon }) => (
        <Link className={cx('menus__item', { 'menus__item--active': pathName === link })} key={link} href={link}>
          <Icon /> {title}
        </Link>
      ))}
    </Box>
  )
}
