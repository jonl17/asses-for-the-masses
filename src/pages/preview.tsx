import React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '@prismic/utils'

const PreviewPage = () => {
  return (
    <div>
      <h1 className='text-5xl'>Andartak...</h1>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME ?? '',
    linkResolver: linkResolver,
  },
])
