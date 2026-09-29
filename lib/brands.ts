// Every brand's 144px full-color app icon lives at /logos/<key>.webp.
// Bump LOGO_VERSION whenever a logo file is replaced, so browsers (phones
// especially) fetch the new image instead of showing a cached old one.
export const LOGO_VERSION = 3

export const brands = {
  pippit: "Pippit",
  superprofile: "SuperProfile",
  coinviral: "CoinViral",
  journey: "Journey",
  sourceready: "Source Ready",
  makeugc: "MakeUGC",
  omi: "Omi",
  evadegpt: "EvadeGPT",
  promote: "Promote",
  unrot: "Unrot",
  hixai: "HIX.AI",
  airalo: "Airalo",
  whop: "Whop",
  cluely: "Cluely",
  openart: "OpenArt",
  primexbt: "PrimeXBT",
  klap: "Klap",
  incogni: "Incogni",
  vmeg: "VMEG",
  pixara: "Pixara",
  apob: "Apob AI",
  invo: "Invo",
} as const

export type BrandKey = keyof typeof brands

export const brandLogo = (key: BrandKey) =>
  `/logos/${key}.webp?v=${LOGO_VERSION}`
