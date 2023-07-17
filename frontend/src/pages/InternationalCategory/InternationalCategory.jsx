

import React from 'react'
import Navbar from '../../components/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import { insternatioanlDataSubCateg } from '../../Data/Data'
import Footer from '../../components/Footer'
import './internationalCategory.css'
import IntHeroBanner from '../../images/img8.jpg'

const InternationalCategory = (props) => {
  const {data} = props

  const filterData = insternatioanlDataSubCateg.filter((ele)=>(
    ele.topic === data
  ))
  const uniqueTitles = Array.from(
    new Set(filterData.map((item) => item.title))
  );
  return (
    <> 
    <Navbar />
    <Herosection 
      heroTitle = {`${data} Material`}
      imgSrc = {IntHeroBanner}
      
    />
    <div className='intSubcategoryContainer'>
      {uniqueTitles.map((title, i)=>(
        <div key={i} className='intSubcategoryContent'>
          <span className='intSubfileTitle'>{title}</span>
          <div className='intSublinkListItems'>
          {filterData.filter((ele)=> ele.title === title).map((data)=>(
            <div key={data.id} className='intSubfileLink'>
              <a href={data.embededLink}  target='_blank' download>
                {data.embededLink}
              </a>
            </div>
          
          ))}
          </div>
      </div>

      ))}
    </div>
    <Footer />
    </>
  )
}

export default InternationalCategory