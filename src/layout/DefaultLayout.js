import React from 'react'
import { Footer } from './partials/Footer'
import { Header } from './partials/Header'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      Main page content
      <Footer />
    </div>
  )
}
