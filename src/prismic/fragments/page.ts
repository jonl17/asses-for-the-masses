import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    uid
    url
    lang
    tags
    prismicId
    data {
      body {
        ... on PrismicPageDataBodyHero {
          ...heroFragment
        }
      }
    }
  }

  fragment heroFragment on PrismicPageDataBodyHero {
    id
    slice_type
  }
`
