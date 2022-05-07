export const linkResolver = (doc: any) => {
  if (doc.uid === 'frontpage') {
    return '/'
  } else {
    return `/${doc.uid}`
  }
}

export const hasDocument = (node: any) => node && node.document

export const isClient = () => typeof window !== 'undefined'
