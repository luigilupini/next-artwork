export type SearchParams = {
  id?: string
  query?: string
  search?: string
  name?: string
  page?: string
  sidebar?: string
  field?: string
  value?: string
}

export type Params = {
  id: string
  slug: string
  serverId: string
}

export type ServerProps = {
  params: Params
  searchParams: SearchParams
}

export type ArtProps = {
  _score: number
  thumbnail: {
    alt_text: string
    width: number
    height: number
  }
  date_display: string
  artist_title: string
  id: number
  image_id: string
  title: string
}

export type DetailProps = {
  credit_line: string
  exhibition_history: string
  short_description: string
  place_of_origin: string
}
