import React from 'react';
import './Devices.css';
import DevicesItems from './DevicesItems';


function Devices() {
  return (
    <div className='cards3'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h1 className='h'>Laptops</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
           <DevicesItems
              src='images/hp.jpg'
              text='Softlogic - Moratuwa'
              label='HP Pavilion Laptop - LKR 194,235'
              
            />
            
            <DevicesItems
              src='images/acer.jpg'
              text='Abans Elite - Piliyandala'
              label='ACER Aspire 10th Gen - LKR 139,900'
              
            />
             <DevicesItems
              src='images/asus.jpg'
              text='Singer - Katubedda'
              label='ASUS P1440FA - LKR 126,000'
             
            />
            <DevicesItems
              src='images/dell.jpg'
              text='Softlogic - Piliyandala'
              label='Dell Inspiron 3593 - LKR 92,490'
              
            />
          </ul>
          <h1 className='h4'>Headphones</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <DevicesItems
              src='images/headphone.jpg'
              text='Smart Arcade - Moratuwa'
              label='Bluetooth Headphone - LKR 1750.00'
              
            />
            <DevicesItems
              src='images/headphone1.jpg'
              text='Softlogic - Piliyandala'
              label='Sony Headphone - LKR 2250.00'
              
            />
             <DevicesItems
              src='images/headphone2.jpg'
              text='Softlogic - Moratuwa'
              label='Wireless Headphone - LKR 2650.00'
             
            />
            <DevicesItems
              src='images/headphone3.jpg'
              text='Abans Elite - Piliyandala'
              label='Focal Wireless Headphone - LKR 2850.00'
              
            />
          </ul>
          <h1 className='h3'>Pen Drives</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <DevicesItems
              src='images/pen3.jpg'
              text='Abans Elite - Piliyandala'
              label='USB Flash Drive 32GB - LKR 2850.00'
              
            />
            <DevicesItems
              src='images/pen1.jpg'
              text='Softlogic - Moratuwaa'
              label='Original SanDisk 128GB - LKR 2025.00 '
              
            />
             <DevicesItems
              src='images/pendrve.jpg'
              text='Singer - Katubedda'
              label='Sandisk 32GB Pendrive - LKR 1765.00'
             
            />
            <DevicesItems
              src='images/pen4.jpg'
              text='C Solutions - Piliyandala'
              label='Kingston 64GB - LKR 780.00'
              
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}
export default Devices;