"use server"

const EMPTY = {
  data: [],
  pagination: {
    offset: 0,
    current: 1,
    total_pages: 0,
    current_page: 1,
    total: 0,
  },
}

export async function searchArt(
  query: string | undefined,
  page: string = "1",
  limit: string = "12",
  field: string = "is_public_domain",
  value: string = "true",
) {
  if (!query) return EMPTY
  const extraProp =
    field === "public" ? `[is_public_domain]=${value}` : `[is_on_view]=${value}`
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${query}&query[term]${extraProp}&page=${page}&limit=${limit}&fields=artist_title,date_display,id,image_id,thumbnail.alt_text,thumbnail.width,thumbnail.height,title`,
  )
  if (!res.ok) throw new Error("Unable to fetch data")
  return res.json()
}

export async function getArt(id = 1) {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
  if (!res.ok) throw new Error("Unable to fetch data")
  return res.json()
}
