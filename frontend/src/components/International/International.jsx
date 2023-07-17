import { InternationalText, internationalData } from '../../Data/Data'
import Cards from '../Cards2'
import Footer from '../Footer'
import Herosection from '../Herosection/Herosection'
import Navbar from '../Navbar'
import './international.css'
import IntHero from '../../images/International (2).jpg'

const International = () => {
  return (
    <div>
      <Navbar />
        <Herosection 
          heroTitle= 'International test' 
          imgSrc  = {IntHero}
        
        />
        <Cards 
            data = { internationalData }
            pageText = {InternationalText}

        />
        
        <Footer />
    </div>
  )
}

export default International