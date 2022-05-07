import { IPage } from '@types'

export const pageResolver = (node: any): IPage => ({
  uid: node.uid,
  url: node.url,
  body: node.data.body,
})
