import classes from './YoutubeCard.module.css'

interface IYoutubeCardList {
  img: string
  link: string
}
const YoutubeClassList = ({ img, link }: IYoutubeCardList) => {
  return (
    <div className={classes.imageContainer}>
      <a href={link}>
        <img src={img} alt={img} />
      </a>
    </div>
  )
}

export default YoutubeClassList
