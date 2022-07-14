import React, { useState } from 'react'
import './entry.css'
import Login from '../../components/login/Login'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
  }

  return (
    <div className='entry-page bg-info'>
      <div className='form-box  mt-4 p-5 bg-light text-primary rounded '>
        <Login handleChange={handleChange} />
      </div>
    </div>
  )
}

export default Entry
