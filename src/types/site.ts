interface Media {
  bluesky: string
  twitter: string
}

interface Meta {
  description: string
  name: string
  themeColor: string
}

interface Chef {
  from: string
  media: Media
  name: string
}

export interface Site {
  chef: Chef
  meta: Meta
}
