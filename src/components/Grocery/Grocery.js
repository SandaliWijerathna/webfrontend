import React from 'react';
import './Grocery.css';
import GroceryItems from './GroceryItems';


function Grocery() {
  return (
    <div className='cards5'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h1 className='he1'>Essentials</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
           <GroceryItems
              src='images/essential1.jpg'
              text='Keells Super - Moratuwa'
              label='Orient Brown Sugar - LKR 267.00'
              
            />
            
            <GroceryItems
              src='images/essential2.jpg'
              text='Cargills - Piliyandala'
              label='CIC Golden Crop - LKR 400.00'
              
            />
             <GroceryItems
              src='images/essential3.jpg'
              text='Lanka Sathosa - Piliyandala'
              label='Coconut Milk Powder - LKR 350.00'
             
            />
            <GroceryItems
              src='images/essential4.jpg'
              text='Lanka Sathosa - Katubedda'
              label='String Hopper Flour - LKR 220.00'
              
            />
          </ul>
          <h1 className='he2'>Dairy Products(Cheese,Milk...)</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <GroceryItems
              src='images/dairy1.jpg'
              text='Cargills – Mount Lavinia'
              label='Ariya Milk Powder - LKR 480.00'
              
            />
            <GroceryItems
              src='images/dairy2.jpg'
              text='Lanka Sathosa - Katubedda'
              label='Anchor Fresh Milk - LKR 360.00'
              
            />
             <GroceryItems
              src='images/dairy3.jpg'
              text='Keells Super - Moratuwa'
              label='Happy Cow Cheese - LKR 510.00'
             
            />
            <GroceryItems
              src='images/dairy4.jpg'
              text='Lanka Sathosa - Piliyandala'
              label='Anchor Newdale - LKR 60.00'
              
            />
          </ul>
          <h1 className='he3'>Bagged Foods(Onions,Potato...)</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <GroceryItems
              src='images/bagged1.jpg'
              text='Family Super - Dehiwala'
              label='Orient Mysoor Dhall - LKR 310.00'
              
            />
            <GroceryItems
              src='images/bagged2.jpg'
              text='Cargills - Rawathawatta'
              label='Bombai Onion - LKR 387.00 '
              
            />
             <GroceryItems
              src='images/bagged3.jpg'
              text='Keells Super - Moratuwa'
              label='Orient White Cowpea - LKR 526.00'
             
            />
            <GroceryItems
              src='images/bagged4.jpg'
              text='Keells Super - Rathmalana'
              label='1 KG Potatoes - LKR 369.00'
              
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}
export default Grocery;