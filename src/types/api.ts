export type TechIcons = {
  title: string
  image: {
    url: string
  }
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText: string
  url: string
}

export type SocialLinkProps = {
  title: string
  url: string
}

export type ReviewProps = {
  name: string
  text: string
  photo: ImageProps
}

export type QuestionProps = {
  question: string
  answer: string
}

export type AuthorProps = {
  photo: ImageProps
  name: string
  role: string
  description: string
  socialLinks?: SocialLinkProps[]
}

export type LogoProps = ImageProps

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: ModuleProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
