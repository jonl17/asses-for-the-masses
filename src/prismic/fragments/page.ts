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
        ... on PrismicPageDataBodyFeature {
          ...featureFragment
        }
      }
    }
  }

  fragment heroFragment on PrismicPageDataBodyHero {
    id
    slice_type
  }

  fragment featureFragment on PrismicPageDataBodyFeature {
    id
    slice_type
    primary {
      image {
        url
        alt
        gatsbyImageData
      }
      text {
        html
      }
    }
  }
`
