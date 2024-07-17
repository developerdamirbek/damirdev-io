type CommentProps = {
  id: number
  author: string
  avatar: string
  comment: string
  date: string
  status: 'mycomment' | 'comment'
  isEdited?: boolean
}

export const commentsData: CommentProps[] = [
  {
    id: 1,
    author: 'Daniyer Farxodov',
    avatar: 'https://i.pravatar.cc/300',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    date: '18:14 18-avgust, 2023',
    status: 'mycomment',
    isEdited: true,
  },
  {
    id: 2,
    author: 'Daniyer Farxodov',
    avatar: 'https://i.pravatar.cc/300',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    date: '18:14 18-avgust, 2023',
    status: 'comment',
    isEdited: false,
  },
]
