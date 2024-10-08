export interface Release {
  overline: string
  title: string
  releaseType: string
  releaseDate: string
  cover: string
  coverLg: string
  coverSm: string
  setlist: Array<SetlistData>
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

export interface SetlistData {
  title: string
  length: string
  video: string
}
