export interface Album {
  overline: string
  title: string
  cover: string
  links: Array<StreamingLink>
}

export interface StreamingLink {
  name: string
  icon: string
  link: string
}
