import { ImageType } from '@types'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
interface IMedia {
  image: ImageType
  video?: {
    url: string
  }
}

const Media = ({ image, video }: IMedia) => {
  if (video) {
    return <video></video>
  }
  return (
    <GatsbyImage
      className='w-full h-full'
      image={image.gatsbyImageData}
      alt={image.alt}
      objectFit='contain'
    />
  )
}

export interface IFeature {
  image: ImageType
  text: {
    html: string
  }
  imageLeft?: boolean
}

const Feature = ({ image, text, imageLeft = false }: IFeature) => {
  return (
    <>
      {/* mobile below */}
      <section className='lg:hidden container mx-auto pb-16 px-5'>
        <div>
          <Media image={image} />
          <div
            className='rich-text mt-5'
            dangerouslySetInnerHTML={{ __html: text.html }}
          />
        </div>
      </section>
      {/* desktop below */}
      <section className='hidden lg:grid grid-cols-5 container mx-auto pb-36'>
        {imageLeft && (
          <div className='w-auto col-span-2'>
            <Media image={image} />
          </div>
        )}
        <div
          className={cn('col-span-3 rich-text', {
            'pr-12': !imageLeft,
            'pl-12': imageLeft,
          })}
          dangerouslySetInnerHTML={{ __html: text.html }}
        />
        {!imageLeft && (
          <div className='w-auto col-span-2'>
            <Media image={image} />
          </div>
        )}
      </section>
    </>
  )
}

export default Feature
