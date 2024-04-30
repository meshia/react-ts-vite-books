export interface BookItemType  {
    title: string,
    key: string,
    authors: AuthorType[],
    subjects?: string[],
    covers?: number[],
    description: string,
    links?: LinkType[],
    subject_people?: string[],
    subtitle?: string,
  }

export interface BookItemProps {
    book: BookItemType
}

  export interface LinkType {
    title: string,
    url: URL
  }

  export interface AuthorType {
    author: {
      key: string
    },
  }