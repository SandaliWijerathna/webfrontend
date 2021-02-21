import React from 'react';
import './Food.css';
import FoodItems from './FoodItems';


function Food() {
  return (
    <div className='cards1'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <h1 className='heading'>Buffets</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
           <FoodItems
              src='images/rice.jpg'
              text='Rasinvil Hotel - Ratmalana'
              label='Chicken Fride Rice - LKR 420.00'
              
            />
            
            <FoodItems
              src='images/koththu.jpg'
              text='Lias Resturant - Moratuwa'
              label='Chicken Koththu - LKR 350.00'
              
            />
             <FoodItems
              src='images/ricencurry.jpg'
              text='Nelum Kole - Bokundara'
              label='Chicken Rice and Curry - LKR 290.00'
             
            />
            <FoodItems
              src='images/string-hoppers.jpg'
              text='Kaala Balan - Ratmalana'
              label='String Hoppers - LKR 120.00'
              
            />
          </ul>
          <h1 className='heading1'>Fast Foods</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <FoodItems
              src='images/pizza.jpg'
              text='Pizza Hut - Piliyandala'
              label='Devilled Chicken Pizza - LKR 500.00'
              
            />
            <FoodItems
              src='images/chickendrumsticks.jpg'
              text='KFC - Mount Lavinia'
              label='Chicken Drumsticks - LKR 240.00'
              
            />
             <FoodItems
              src='images/burger.jpg'
              text='McDonalds - Dehiwala'
              label='Burger - LKR 450.00'
             
            />
            <FoodItems
              src='images/hoppers.jpg'
              text='Kaala Balan - Ratmalana'
              label='Egg Hoppers - LKR 25.00'
              
            />
          </ul>
          <h1 className='heading3'>Juice and Smoothies</h1>
            <hr></hr>
            <br></br>
          <ul className='cards__items'>
          <FoodItems
              src='images/milkshake.jpg'
              text='Squeeze - Borupona Road'
              label='Chocolate Milkshake - LKR 180.00'
              
            />
            <FoodItems
              src='images/avacado.jpg'
              text='Roots K-Zone - Katubedda'
              label='Avacado - LKR 140.00 '
              
            />
             <FoodItems
              src='images/pineapple.jpg'
              text='Sweety Foods - Moratuwa'
              label='Pineapple - LKR 120.00'
             
            />
            <FoodItems
              src='images/lemonwater.jpg'
              text='Juice Life - Moratuwa'
              label='Lemon Juice - LKR 110.00'
              
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Food;










