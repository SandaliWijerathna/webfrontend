import React from 'react';
import './Fashion.css';
import FashionItems from './FashionItems';


function Fashion() {
  return (
    <div className='cards2'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h1 className='headings1'>Kids</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
           <FashionItems
              src='images/kids1.jpg'
              text='Velona - Moratuwa'
              label='Organic Cotton Frock - LKR 1890.00'
              
            />
            
            <FashionItems
              src='images/kids2.jpg'
              text='Fashion Hub - Piliyandala'
              label='Baby Party Frock - LKR 2350.00'
              
            />
             <FashionItems
              src='images/kids3.jpg'
              text='Fashion Bug - Moratuwa'
              label='Baby Boy Kit - LKR 2250.00'
             
            />
            <FashionItems
              src='images/kids4.jpg'
              text='ODEL - K-Zone Moratuwa'
              label='Boys Shirt - LKR 1850.00'
              
            />
          </ul>
          <h1 className='headings2'>Ladies</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <FashionItems
              src='images/ladies2.jpg'
              text='ODEL - K-Zone Moratuwa'
              label='Melissa Red Border Frock - LKR 3490.00'
              
            />
            <FashionItems
              src='images/ladies3.jpg'
              text='Fashion Hub - Piliyandala'
              label='Flow Linen Trouser - LKR 1560.00'
              
            />
             <FashionItems
              src='images/ladies1.jpg'
              text='Fashion Bug - Moratuwa'
              label='Sleeveless Casual Frock - LKR 1500.00'
             
            />
            <FashionItems
              src='images/ladies4.jpg'
              text='ODEL - K-Zone Moratuwa'
              label='Green Cotton Saree - LKR 2450.00'
              
            />
          </ul>
          <h1 className='headings3'>Gents</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <FashionItems
              src='images/gents1.jpg'
              text='ODEL - K-Zone Moratuwa'
              label='cotton casual shirt - LKR 2450.00'
              
            />
            <FashionItems
              src='images/gents3.jpg'
              text='Fashion Hub - Piliyandala'
              label='Casual Black Shirt - LKR 1750.00'
              
            />
             <FashionItems
              src='images/gents2.jpg'
              text='Fashion Bug - Moratuwa'
              label='Denim Long Trouser - LKR 3590.00'
             
            />
            <FashionItems
              src='images/gents4.jpg'
              text='Velona - Moratuwa'
              label='Striped Casual Shirt - LKR 2300.00'
              
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}
export default Fashion;