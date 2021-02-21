import React from 'react';
import './Stationary.css';
import StationaryItems from './StationaryItems';


function Stationary() {
  return (
    <div className='cards6'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h1 className='headin1'>Books</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
           <StationaryItems
              src='images/cr.jpg'
              text='Didula Book shop  Moratuwa'
              label='Atlas CR Book - LKR 220.00'
              
            />
            
            <StationaryItems
              src='images/diary.jpg'
              text='Lias Resturant - Moratuwa'
              label='Rose Diary - LKR 320.00'
              
            />
             <StationaryItems
              src='images/drawing.jpg'
              text='Sarasi Book Shop - Piliyandala'
              label='Drawing Book - LKR 80.00'
             
            />
            <StationaryItems
              src='images/promate.jpg'
              text='Samadi Book Shop - Moratuwa'
              label='Promate Exercise Book - LKR 180.00'
              
            />
          </ul>
          <h1 className='headin2'>Other School Stationery</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <StationaryItems
              src='images/waterbottle.jpg'
              text='Sarasi Book Shop - Piliyandala'
              label='Water Bottle - LKR 280.00'
              
            />
            <StationaryItems
              src='images/hilight.jpg'
              text='Didula Book shop - Moratuwa'
              label='Highlighter - LKR 60.00'
              
            />
             <StationaryItems
              src='images/atlaschootypen.jpg'
              text='Samadi Book Shop - Moratuwa'
              label='Atlas Chooty Pen - LKR 10.00'
             
            />
            <StationaryItems
              src='images/pencilbox.jpg'
              text='Samadi Book Shop - Moratuwa'
              label='Pencil Box - LKR 180.00'
              
            />
          </ul>
          <h1 className='headin3'>Gifts, Cards & Party</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <StationaryItems
              src='images/birthdaycrd.jpg'
              text='Didula Book shop - Moratuwa'
              label='Birthday Card - LKR 120.00'
              
            />
            <StationaryItems
              src='images/ballon.jpg'
              text='Samadi Book Shop - Moratuwa'
              label='Birthday Ballon - LKR 15.00 '
              
            />
             <StationaryItems
              src='images/giftpack.jpg'
              text='Sarasavi Book Shop - Piliyandala'
              label='Gift Pack - LKR 720.00'
             
            />
            <StationaryItems
              src='images/wallbanner.jpg'
              text='Sarasi Book Shop - Piliyandala'
              label='Birthday Wall Banner - LKR 210.00'
              
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}
export default Stationary;