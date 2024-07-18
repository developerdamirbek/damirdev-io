import { Box, Button, Typography } from '@mui/material'
import { cookies } from 'next/headers'
import NextLink from 'next/link'
import { ROUTES } from '@/constants'
import { Cookies } from '@/constants/cookies'
import mainDictionary from '@/dictionary'
import { ProtectedLayout, PublicCenterBlock, PublicLayout } from '@/layouts'

export default function NotFoundPage() {
  const cookieStore = cookies()
  const user = cookieStore.get(Cookies.User)?.value
  const LayoutComponent = user ? ProtectedLayout : PublicLayout

  return (
    <LayoutComponent>
      <PublicCenterBlock>
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{ width: '100%' }}>
          <Typography variant="h2" align="center">
            {mainDictionary.error404}
          </Typography>

          <Typography variant="body2" align="center">
            {mainDictionary.thisPageNotExist}
          </Typography>

          <Button component={NextLink} href={ROUTES.home}>
            {mainDictionary.toHomePage}
          </Button>
        </Box>
      </PublicCenterBlock>
    </LayoutComponent>
  )
}
