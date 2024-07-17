import BarChartIcon from '@mui/icons-material/BarChart'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ClearIcon from '@mui/icons-material/Clear'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GroupsIcon from '@mui/icons-material/Groups'
import HomeIcon from '@mui/icons-material/Home'
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import PaymentIcon from '@mui/icons-material/Payment'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import { makeIcon } from './make-icon'
import { paths } from './paths'

export const Icons = {
  GroupsIcon,
  PaymentIcon,
  SettingsOutlinedIcon,
  InsertChartOutlinedTwoToneIcon,
  MenuIcon,
  ClearIcon,
  DashboardIcon,
  DiamondOutlinedIcon,
  ExpandMoreIcon,
  LanguageOutlinedIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrendingUpOutlinedIcon,
  BarChartIcon,
  HomeIcon,

  ArrowDown: makeIcon(paths.arrowPrev, 12, 8, 'rotate(-90, 4, 4)'),
  ArrowNext: makeIcon(paths.arrowPrev, 8, 12, 'rotate(180, 4, 6)'),
  ArrowPrev: makeIcon(paths.arrowPrev, 7, 12),
  ArrowUp: makeIcon(paths.arrowPrev, 12, 8, 'rotate(90, 6, 6)'),
  Add: makeIcon(paths.add, 14, 14),
  Bell: makeIcon(paths.bell, 16, 20),
  Close: makeIcon(paths.close, 14, 14),
  Download: makeIcon(paths.download, 14, 17),
  Edit: makeIcon(paths.edit, 19, 19),
  Error: makeIcon(paths.error, 20, 20),
  Info: makeIcon(paths.info, 20, 20),
  MenuMin: makeIcon(paths.menuMin, 24, 23),
  Pdf: makeIcon(paths.pdf, 16, 20),
  Person: makeIcon(paths.person, 16, 16),
  Send: makeIcon(paths.send, 20, 17),
  Setting: makeIcon(paths.setting, 18, 18),
  Success: makeIcon(paths.success, 18, 13),
  Ups: makeIcon(paths.ups, 70, 61),
  Warning: makeIcon(paths.warning, 40, 40),
  NotifyWarning: makeIcon(paths.notifyWarning, 40, 40),
  Loup: makeIcon(paths.loup, 18, 18),
  ToRoute: makeIcon(paths.toRoute, 16, 10),
  Reload: makeIcon(paths.reload, 16, 16),
  LogoForBG: makeIcon(paths.logo, 69, 46),
} as const
