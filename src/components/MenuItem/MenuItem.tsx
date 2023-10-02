import classes from './MenuItem.module.css'

interface IMenuItem {
  item: string
}

const MenuItem = ({ item }: IMenuItem) => {
  return (
    <div>
      <a className={classes.item} href="#">
        {item}
      </a>
    </div>
  )
}

export default MenuItem
