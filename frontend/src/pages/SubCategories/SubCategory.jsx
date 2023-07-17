import React from 'react'
import Navbar from '../../components/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import { nationalDataSubCateg } from '../../Data/Data'

import './subcategory.css'
import Footer from '../../components/Footer'
import NationalHerobanner from '../../images/natCatBanner.jpg'

const SubCategory = (props) => {
  const {data} = props

  const filterData = nationalDataSubCateg.filter((ele)=>(
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
      imgSrc = {NationalHerobanner}
      
    />
    <div className='subcategoryContainer'>
      {uniqueTitles.map((title, i)=>(
        <div key={i} className='subcategoryContent'>
          <span className='fileTitle'>{title}</span>
          <div className='linkListItems'>
          {filterData.filter((ele)=> ele.title === title).map((data)=>(
            <div key={data.id} className='fileLink'>
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

export default SubCategory