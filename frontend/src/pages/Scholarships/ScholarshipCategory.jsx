import React from 'react'
import Navbar from '../../components/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import { ScholarshipCat } from '../../Data/Data'
import Footer from '../../components/Footer'
import NationalHerobanner from '../../images/natCatBanner.jpg'

const ScholarshipCategory = (props) => {
  const {data} = props

  const filterData = ScholarshipCat.filter((ele)=>(
    ele.topic === data
  ))
  const uniqueTitles = Array.from(
    new Set(filterData.map((item) => item.title))
  );
  return (
    <> 
    <Navbar />
    <Herosection 
      heroTitle = {`${data} Scholarship`}
      imgSrc = {NationalHerobanner}
      
    />
    <div className='subcategoryContainer'>
      {uniqueTitles.map((title, i)=>(
        <div key={i} className='subcategoryContent'>
          <span className='fileTitle'>{title}</span>
          <div className='linkListItems'>
          {filterData.filter((ele)=> ele.title === title).map((data)=>(
            <div key={data.id} className='fileLink'>
              <a href={data.embededLink}  target='_blank'>
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

export default ScholarshipCategory