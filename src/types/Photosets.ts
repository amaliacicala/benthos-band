export interface PhotosetsState {
  loading: boolean
  images: Array<FlickrPhoto>
}

export interface FlickrPhoto {
  id: string
  secret: string
  server: string
  farm: number
  title: string
  isprimary: string
  ispublic: number
  isfriend: number
  isfamily: number
  url_c: string
  height_c: number
  width_c: number
  url_l: string
  height_l: number
  width_l: number
  url_o: string
  height_o: number
  width_o: number
}

export interface FlickrPhotoset {
  id: string
  primary: string
  owner: string
  ownername: string
  photo: Array<FlickrPhoto>
  page: string
  per_page: string
  perpage: string
  pages: number
  title: string
  total: number
}

export interface FlickrResponse {
  photoset: FlickrPhotoset
  stat: string
}
