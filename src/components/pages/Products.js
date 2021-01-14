import React from 'react';
import '../../App.css';
import CardItem from "../CardItem";

export default function Products() {
  return (
    <>
  <h1 className='products'>PRODUCTS</h1>;
  <ul className='cards__items'>
              <CardItem
              src='images/img-3.jpg'
              text='Taste our traditional food, recipes of hundreds of years, aromatic spices, natural products and always cooked with love'
              label='Delicacy'
              path='/products'
            />
            <CardItem
            src='images/img-4.jpg'
            text='Try our traditions. Immerse yourself in the magic of Bulgarian folklore'
            label='Adventure'
            path='/products'
            />
          </ul>
  </>
  );
  return 
}
