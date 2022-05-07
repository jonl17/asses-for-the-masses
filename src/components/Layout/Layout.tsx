import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <title>asses for the masses</title>
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default Layout
