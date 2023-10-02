import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import TitleSection from './components/TitleSection'
import { blogs } from './data'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TitleSection />
        <div className="card">
          {blogs.map((blog) => {
            return <Card post={blog} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
