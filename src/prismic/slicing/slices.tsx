import { ISlice } from '@types'
import React from 'react'
import Hero from '@cmp/Hero'
import Feature, { IFeature } from '@cmp/Feature'

const slices = (slice: ISlice) => {
  switch (slice.slice_type) {
    case 'hero': {
      return <Hero />
    }
    case 'feature': {
      const props: IFeature = {
        image: slice.primary.image,
        text: slice.primary.text,
      }
      return <Feature {...props} />
    }
    default: {
      return null
    }
  }
}

export default slices
