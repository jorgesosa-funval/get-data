import LoginForm from '@/components/LoginForm'
import axios from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {

  const handlesubmit = async (formdata) => {
    'use server'
    const username = formdata.get('username')
    const password = formdata.get('password')

    let success = false

    try {
      const {data} = await axios.post('https://auth-api-cgtt.onrender.com/api/v1/auth/login', {
        username,
        password
      })
      
      cookies().set('token', data.token);
      success = true;
      
    } catch (error) {
      console.log(error?.response?.data || error.message)
    }

    if(success){
      redirect('/')
    }


  }


  return (
    <div className='w-full h-screen grid place-content-center bg-slate-100'>
      <LoginForm handlesubmit={handlesubmit} />
    </div>
  )
}
