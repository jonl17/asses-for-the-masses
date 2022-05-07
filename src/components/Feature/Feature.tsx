import { ImageType } from '@types'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export interface IFeature {
  image: ImageType
  text: {
    html: string
  }
}

const Feature = ({ image, text }: IFeature) => {
  return (
    <section className='lg:grid grid-cols-5 container mx-auto pb-36'>
      <div
        className='lg:pr-12 col-span-3 rich-text'
        dangerouslySetInnerHTML={{ __html: text.html }}
      />
      <div className='w-full lg:w-auto col-span-2'>
        <GatsbyImage
          className='w-full h-full'
          image={image.gatsbyImageData}
          alt={image.alt}
          objectFit='contain'
        />
      </div>
    </section>
  )
}

export default Feature
