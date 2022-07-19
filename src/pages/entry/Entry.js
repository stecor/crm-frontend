import React, { useState } from 'react'
import './entry.css'
import Login from '../../components/login/Login'
import ResetPassword from '../../components/reset/ResetPassword'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')

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

  const formSwitch = (formType) => {
    setFormLoad(formType)
  }

  const handleResetSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      return alert('Please enter the email')
    }

    console.log(email)
  }

  return (
    <div className='entry-page bg-info'>
      <div className='form-box  mt-4 p-5 bg-light text-primary rounded '>
        {formLoad === 'login' && (
          <Login
            handleOnChange={handleChange}
            handleOnSubmit={handleSubmit}
            formOnSwitch={formSwitch}
            email={email}
            password={password}
          />
        )}
        {formLoad === 'reset' && (
          <ResetPassword
            handleOnChange={handleChange}
            handleOnResetSubmit={handleResetSubmit}
            formOnSwitch={formSwitch}
            email={email}
          />
        )}
      </div>
    </div>
  )
}

export default Entry
