import Rightside from "../components/home-page/Rightside"
import Leftside from "../components/home-page/Leftside"
import '../styles/Home.css'
function Home() {
  return (
    <div className="home-page-container">
        <Leftside />
        <Rightside />
    </div>
  )
}

export default Home