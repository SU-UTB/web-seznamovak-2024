import Navbar from './components/moleculs/Navbar'
import Aftermovie from './components/sections/Aftermovie'
import Application from './components/sections/Application'
import Contact from './components/sections/Contact'
import Faq from './components/sections/Faq'
import Gallery from './components/sections/Gallery'
//import Instructors from './components/sections/Instructors'
import Map from './components/sections/Map'
import Partners from './components/sections/Partners'
import ScrollToTopButton from './components/moleculs/ScrollToTopButton'
import Overlay from './components/sections/Overlay'
import { AnalyticsEvents, Firebase } from './utils/firebase'

const App: React.FC = () => {
  Firebase.instance.aLog(AnalyticsEvents.webLoaded, {})

  return (
    <div className="App">
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
      <Navbar />
      <Overlay />
      <Application />
      <Gallery />
      {/* <Instructors /> */}
      <Map />
      <Aftermovie />
      <Faq />
      <Partners />
      <Contact />
      <ScrollToTopButton />
    </div>
  )
}

export default App
