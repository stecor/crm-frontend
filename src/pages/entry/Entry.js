import React from 'react'
import './entry.css'
import Login from '../../components/login/Login'
const Entry = () => {
  return (
    <div className='entry-page bg-info'>
      <div className='mt-4 p-5 bg-white text-black rounded'>
        <Login />
      </div>
    </div>
  )
}

export default Entry
