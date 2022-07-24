import React from 'react';
import  {SaleShoe}  from './img/weimg';
import './public/Products.css'
 

const HeroBanner = () => {
  
  return (
    <div className="hero-banner-container">
     
      <h3>What Are </h3>
      
        <h1>Shoes</h1>
        
        
        
        
      <div>
        
        
        <SaleShoe/>

        {/* <div className='both'> */}
         
            {/* <button type="button" onClick={()=> setDesc(true)}>View</button> */}
          
          <div className="desc">
            {/* <h5>Description</h5> */}
            <p>A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.</p>
          </div>
        {/* </div> */}
        {/* <h2>Champions keep playing until they get it right.</h2> */}
        
      </div>
    </div>
  )
}

export default HeroBanner