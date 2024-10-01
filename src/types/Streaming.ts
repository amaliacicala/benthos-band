export interface Album {
  overline: string
  title: string
  cover: string
  coverLg: string
  coverSm: string
  links: Array<StreamingLink>
}

export interface StreamingLink {
  name: string
  icon: string
  link: string
}

export interface SingleStreamingLink {
  name: string
  link: string
}
