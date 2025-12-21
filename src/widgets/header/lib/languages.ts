import engImg from "~/assets/img/eng.svg"

export const LANGUAGES = [
  {
    id: "eng",
    imgLink: engImg
  }
] as const

export type Language = (typeof LANGUAGES)[number]["id"]