
import { NationalText, nationalData } from '../../Data/Data'
import Footer from '../Footer'
import Herosection from '../Herosection/Herosection'
import Navbar from '../Navbar'
import './national.css'
import Cards from '../Cards2'
import NationalHeroBanner from '../../images/national.jpg'


const National = () => {
  return (
    <div>
        <Navbar />
        <Herosection 
          heroTitle= 'National Test' 
          imgSrc = {NationalHeroBanner}
        
        />
        <Cards 
            data = { nationalData }
            pageText = {NationalText}
            

        />
        
        <Footer/>
    </div>
  )
}

export default National