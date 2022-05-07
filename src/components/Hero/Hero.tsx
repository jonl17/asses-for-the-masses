import LeftAss from '@cmp/Icons/LeftAss'
import Logo from '@cmp/Icons/Logo'
import RightAss from '@cmp/Icons/RightAss'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen grid place-items-center overflow-hidden relative'>
      <Logo className='w-full p-5 lg:p-0 mb-24 relative' />
      <LeftAss className='absolute left-0 top-0 -translate-x-full animate-slide-in-left' />
      <RightAss className='absolute right-0 top-0 translate-x-full animate-slide-in-right' />
    </section>
  )
}

export default Hero
