import React from 'react';
import './Cosmetics.css';
import CosmeticsItems from './CosmeticsItems';


function Cosmetics() {
  return (
    <div className='cards4'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h1 className='head'>SkinCare</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
           <CosmeticsItems
              src='images/CleannClear.jpg'
              text='Saweena - Piliyandala'
              label='Clean & Clear face wash - LKR 165.00'
              
            />
            
            <CosmeticsItems
              src='images/toner.jpg'
              text='Asariya Fancy - Moratuwa'
              label='Rose Water Toner - LKR 230.00'
              
            />
             <CosmeticsItems
              src='images/chandanaleepa.jpg'
              text='Shop In - Mount Lavinia'
              label='Chandanaleepa - LKR 200.00'
             
            />
            <CosmeticsItems
              src='images/forever5cleanupscrub.jpg'
              text='Asariya Fancy - Moratuwa'
              label='Venivel Clean-Up - LKR 450.00'
              
            />
          </ul>
          <h1 className='head1'>HairCare</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <CosmeticsItems
              src='images/lorealtotalrepairshampoo.jpg'
              text='Fancy paradise - Dehiwala'
              label='Loreal Hair Shampoo - LKR 1350.00'
              
            />
            <CosmeticsItems
              src='images/kumarikahairoil.jpg'
              text='Shop In - Mount Lavinia'
              label='Kumarika hair oil - LKR 150.00'
              
            />
             <CosmeticsItems
              src='images/doveshampoo.jpg'
              text='Saweena - Piliyandala'
              label='Dove Shampoo - LKR 370.00'
             
            />
            <CosmeticsItems
              src='images/Revlonhaircolor.jpg'
              text='Angels - Moratuwa'
              label='Revlon Black hair color - LKR 1500.00'
              
            />
          </ul>
          <h1 className='head3'>Makeup</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <CosmeticsItems
              src='images/KumadoriLipstick.jpg'
              text='Saweena - Piliyandala'
              label='Kumadori Lipstick - LKR 450.00'
              
            />
            <CosmeticsItems
              src='images/PerfectMatEyeliner.jpg'
              text='K-Zone - Katubedda'
              label='Perfect Matte Eyeliner - LKR 650.00'
              
            />
             <CosmeticsItems
              src='images/VianaMoisturizingCompactPowder.jpg'
              text='Fancy Corner - Piliyandala'
              label='Viana Compact Powder - LKR 720.00'
             
            />
            <CosmeticsItems
              src='images/VianaPowderBrush.jpg'
              text='Angels - Moratuwa'
              label='Viana Powder Brush - LKR 1220.00'
              
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cosmetics;