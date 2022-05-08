import Discord from '@cmp/Icons/Discord'
import Twitter from '@cmp/Icons/Twitter'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center lg:justify-start lg:grid grid-cols-2 gap-5'>
      <a target='_blank' href='https://twitter.com/assesforthemas1'>
        <Twitter />
      </a>
      <a target='_blank' href='https://discord.gg/d2m3emHPTG'>
        <Discord />
      </a>
    </div>
  )
}

export default Contact
