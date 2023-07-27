export interface ButtonInterface {
  id: string
  type: string
  label: string
  color: string
  url: string
  showIcon: boolean
  selectIcon: string
  isModalOpen?: any
  setIsModalOpen?: any
}

interface PictureInterface {
  data: {
    id: string
    attributes: {
      url: string
      name: string
      alternativeText: string
    }
  }
}

export interface NavLinkInterface {
  id: number
  url: string
  newTab: boolean
  text: string
  emoji: string
  prefetch?: boolean
}

export interface TextBlockInterface {
  data: {
    id: string
    kicker: string
    heading: string
    description: string
    buttons: ButtonInterface[]
  }
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  isModalOpen?: any
  setIsModalOpen?: any
}

export interface Hero5050 extends TextBlockInterface {
  data: {
    id: string
    kicker: string
    heading: string
    description: string
    buttons: ButtonInterface[]
    picture: PictureInterface
  }
  modalTest?: boolean
}