import { ISlice } from '@types'
import React from 'react'
import Hero from '@cmp/Hero'

const slices = (slice: ISlice) => {
  switch (slice.slice_type) {
    case 'hero': {
      return <Hero />
    }
    default: {
      return null
    }
  }
}

export default slices
