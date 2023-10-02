import { BlogDTO } from '../../types/dto'
import Card from '../Card/Card'
interface CardList {
  posts: BlogDTO[]
}
const CardList = ({ posts }: CardList) => {
  return (
    <>
      {posts.map((blog) => {
        return <Card post={blog} />
      })}
    </>
  )
}

export default CardList
