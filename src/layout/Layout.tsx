import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'
type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
