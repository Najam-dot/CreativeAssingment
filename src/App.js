import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Care from './Components/CareSection'
// import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Map from './Components/Map'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Care />
      {/* <Services /> */}
      <Testimonials />
      <Map />
      <Footer />
    </div>
  )
}

export default App
