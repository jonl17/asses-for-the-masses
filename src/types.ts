export interface ISlice {
  slice_type: string
  slice_label: string | null
  id: string
  primary: any
  items: any[]
}

export interface IPage {
  url: string
  uid: string
  body: any[]
}
