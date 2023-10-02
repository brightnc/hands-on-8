import { ReactNode } from 'react'
import classes from './TitleSection.module.css'

interface ITitleSection {
  section: string
  children: ReactNode
}
const TitleSection = ({ section, children }: ITitleSection) => {
  return (
    <div className={classes.SectionContainer}>
      <div className={classes.titleContainer}>
        {children}
        <h2>{section}</h2>
      </div>
      <a href="#">View All</a>
    </div>
  )
}
export default TitleSection
