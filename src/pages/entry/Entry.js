import React, { useState } from 'react'
import './entry.css'
import Login from '../../components/login/Login'
import ResetPassword from '../../components/reset/ResetPassword'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log('hello')
    console.log(name, value)
    switch (name) {
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert('Fill up all the form!')
    }
  }

  return (
    <div className='entry-page bg-info'>
      <div className='form-box  mt-4 p-5 bg-light text-primary rounded '>
        <Login
          handleOnChange={handleChange}
          handleOnSubmit={handleSubmit}
          email={email}
          password={password}
        />
        <ResetPassword
          handleOnChange={handleChange}
          handleOnSubmit={handleSubmit}
          email={email}
        />
      </div>
    </div>
  )
}

export default Entry
