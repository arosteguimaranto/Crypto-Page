
import { Album } from './components/Album'
import { Analytics } from './components/Analytics'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HomePage } from './components/HomePage'
import { NavBar } from './components/NavBar'
import { Newsletter } from './components/Newsletter'

import './index.css'





function App() {
  

  return (
    <div> 
    
      <NavBar/>
      <HomePage/>
      <Hero/>
      <Album/>
    
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default App
