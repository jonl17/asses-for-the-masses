import { linkResolver } from './utils'
import { config } from 'dotenv'

config()

const {
  GATSBY_PRISMIC_REPOSITORY_NAME: repositoryName,
  PRISMIC_ACCESS_TOKEN: accessToken,
} = process.env

const gatsbySourcePrismic = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName,
    accessToken,
    schemas: {
      page: require('./schemas/page.json'),
    },
    linkResolver,
  },
}

const gatsbySourcePrismicPreviews = {
  resolve: 'gatsby-plugin-prismic-previews',
  options: {
    repositoryName,
  },
}

export { gatsbySourcePrismic, gatsbySourcePrismicPreviews }
