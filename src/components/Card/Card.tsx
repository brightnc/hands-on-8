import { BlogDTO } from '../../types/dto'
import Hashtag from '../Hashtag/Hashtag'
import classes from './Card.module.css'
interface ICardProps {
  post: BlogDTO
}
const Card = ({ post }: ICardProps) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.authorContainer}>
        <p className={classes.authorText}>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.readingTime}</p>
      </div>
      <h3>{post.header}</h3>
      <p>{post.description}</p>
      <div className={classes.hashtagContainer}>
        {post.tags.map((tag) => {
          return <Hashtag tag={tag} />
        })}
      </div>
    </div>
  )
}
export default Card
