import { Container, Typography } from '@mui/material'
import React, { FC } from 'react'
interface PageProps {}

const page:FC<PageProps> = () => {
  return (
    <Container>
      <Typography variant="h1">
        Page
      </Typography>
    </Container>
  )
}

export default page