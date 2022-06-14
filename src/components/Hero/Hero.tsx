import Contact from '@cmp/Contact'
import LeftAss from '@cmp/Icons/LeftAss'
import Logo from '@cmp/Icons/Logo'
import RightAss from '@cmp/Icons/RightAss'
import React from 'react'

const Hero = () => {
  return (
    <section className='lg:h-screen grid lg:place-items-center overflow-hidden relative mb-12'>
      <div className='hidden lg:block'>
        <Contact />
      </div>
      <Logo className='w-full p-5 lg:p-0 lg:mb-56 mt-16 lg:mt-0 relative' />
      <a
        className='px-5 md:px-10 mb-5 md:mb-12 py-5 border rounded-2xl bg-purple-600 grid place-items-center'
        target='_blank'
        href='http://aftm-mint.netlify.app'
      >
        <p className='text-3xl md:text-7xl mt-3 text-white text-center'>
          MINT NOW
        </p>
      </a>
      <div className='block lg:hidden'>
        <Contact />
      </div>
      <LeftAss className='hidden lg:block absolute left-0 top-0 -translate-x-full animate-slide-in-left' />
      <RightAss className='hidden lg:block absolute right-0 top-0 translate-x-full animate-slide-in-right' />
    </section>
  )
}

export default Hero
