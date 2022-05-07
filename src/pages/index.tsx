import React from 'react'
import LeftAss from '../components/Icons/LeftAss'
import RightAss from '../components/Icons/RightAss'
import Logo from '../components/Icons/Logo'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-pink grid place-items-center overflow-hidden relative'>
      <Logo className='w-full p-5 lg:p-0 mb-24 relative' />
      <LeftAss className='absolute left-0 top-0 -translate-x-full animate-slide-in-left' />
      <RightAss className='absolute right-0 top-0 translate-x-full animate-slide-in-right' />
    </div>
  )
}
