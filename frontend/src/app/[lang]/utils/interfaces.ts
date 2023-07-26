export interface ButtonInterface {
  id: string
  label: string
  type: string
  url: string
}

interface Picture {
  data: {
    id: string
    attributes: {
      url: string
      name: string
      alternativeText: string
    }
  }
}

export interface TextBlockInterface {
  data: {
    id: string
    kicker: string
    heading: string
    description: string
    buttons: ButtonInterface[]
  }
  headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface Hero5050 extends TextBlockInterface {
  data: {
    id: string
    kicker: string
    heading: string
    description: string
    buttons: ButtonInterface[]
    picture: Picture
  }
}
