import Herosection from '../../components/Herosection/Herosection'
import Navbar from '../../components/Navbar'
import './scholarships.css'
import SchoHeroBanner from  '../../images/European.jpg'
import Footer from '../../components/Footer'
import Cards from '../../components/Cards2'
import { ScholarshipText, scholarshipCountry } from '../../Data/Data'

const Scholarships = () => {
  return (
    <>
        <Navbar />
        <Herosection 
            heroTitle = 'Scholarship Title'
            imgSrc = {SchoHeroBanner}
        />
        <Cards 
          data = {scholarshipCountry}
          pageText = {ScholarshipText}
        />
        <Footer />
    </>
  )
}

export default Scholarships