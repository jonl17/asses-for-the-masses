import { ISlice } from '@types'
import slices from './slices'

type Props = {
  slice: ISlice
}

const SliceMapper = ({ slice }: Props) => {
  const sliceFound = slices(slice)

  if (!sliceFound) {
    throw new Error(`slice not found: ${slice.slice_type}`)
  }

  return sliceFound
}

export default SliceMapper
