import React from 'react'
import { graphql } from 'gatsby'
import '@prismic/fragments/page'
import { pageResolver } from '@prismic/resolvers'
import SliceMapper from '@prismic/slicing/mapper'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

type Props = {
  data: any
}

const PageTemplate: React.FC<Props> = ({ data }) => {
  const page = pageResolver(data.prismicPage)
  return (
    <div>
      {page.body.map((slice, key) => (
        <SliceMapper slice={slice} key={key} />
      ))}
    </div>
  )
}

export default withPrismicPreview(PageTemplate)

export const query = graphql`
  query genericPageQuery($prismicId: ID!) {
    prismicPage(prismicId: { eq: $prismicId }) {
      _previewable
      ...pageFragmentFull
    }
  }
`
