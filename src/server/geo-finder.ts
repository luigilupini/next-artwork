type CountryCode = "Germany" | "France" | "The Netherlands" | "Poland"

// Generally we would use either an API call or direct server action here:
const getSupportedCountries = (): CountryCode[] => {
  return ["Germany", "France", "The Netherlands", "Poland"]
}

export const isSupportedCountry = (country: string): country is CountryCode => {
  return getSupportedCountries().includes(country as CountryCode)
}
