import React from 'react'
import { Footer } from './partials/Footer'
import { Header } from './partials/Header'

export const DefaultLayout = () => {
  return (
    <div className='default-layout'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>Main page content</main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}
