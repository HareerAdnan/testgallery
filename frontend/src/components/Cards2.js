import React from 'react';
import './Cards.css';
import CardItem from './CardItem';




function Cards(props) {
    const { data,pageText } = props
    
    return (
        <div className="cards">
            <h1>REGISTER YOURSELF FOR THE COURSES NOW!</h1>
            {pageText ? 
                 <span style={{ display: 'inline', fontSize: '22px', color: '#fff' }}>
                
                 {pageText}
             </span>  : 
             
             <div className='homeText'>
                <span>---------"Supercharge your success!”------------</span>
                <span>Start now and effortlessly conquer your Entry tests with a single click</span>
                <span>Unlock your potential and soar to the top of the results!</span>
             </div>
        }
           
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className={data.length > 2 ? "cards__items" : 'cards__items-flex'}>
                        {data.map((ele)=>(
                                <CardItem
                                    src={ele.imgSrc}
                                    text={ele.desc}
                                    label={ele.title}
                                    path={ele.path}
                                    key={ele.id}
                                />
                        ))}
                    </div>
                   
                </div>
            </div>
        </div>
    );
}


export default Cards;