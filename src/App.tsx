import './App.css'
import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'
import Navbar from './components/Navbar/Navbar'
import TitleSection from './components/TitleSection/TitleSection'
import YoutubeClass from './components/YoutubeCard/YoutubeCard'
import { blogs, youtubePosts } from './data'
import thumbnail_ep1 from './assets/thumbnail_ep1.jpeg'
import thumbnail_ep5 from './assets/thumbnail_ep5.jpeg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TitleSection section="Blog">
          <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="16" height="17" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="4" width="10" height="2" fill="currentColor" stroke="none" />
            <rect x="4" y="8" width="8" height="2" fill="currentColor" stroke="none" />
            <rect x="4" y="12" width="5" height="2" fill="currentColor" stroke="none" />
          </svg>
        </TitleSection>
        <div className="card">
          <CardList posts={blogs} />
        </div>
      </div>
      <div>
        <TitleSection section="Podcast & Video">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14.5L14 10L8 5.5V14.5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"></path>
          </svg>
        </TitleSection>

        <div className="card">
          <YoutubeClass link="https://www.youtube.com/watch?v=cuZdfMm2iPI&ab_channel=Cleverse" img={thumbnail_ep1} />
          <Card post={youtubePosts[0]} />
        </div>
        <div className="card">
          <YoutubeClass link="https://www.youtube.com/watch?v=9vr6PidRAko&ab_channel=Cleverse" img={thumbnail_ep5} />
          <Card post={youtubePosts[1]} />
        </div>
      </div>
    </div>
  )
}

export default App
