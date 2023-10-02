import classes from './Hashtag.module.css'

interface IHashtagProps {
  tag: string
}

const Hashtag = ({ tag }: IHashtagProps) => {
  return (
    <div className={classes.hashtagContainer}>
      <p>#{tag}</p>
    </div>
  )
}
export default Hashtag
