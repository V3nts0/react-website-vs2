import React from 'react';
import '../../App.css';
import CardItem from "../CardItem";

export default function Services() {
  return (
    <>
  <h1 className='services'>SERVICES</h1>
  <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Discover the beauty of architectural and historical landmarks'
              label='Adventure'
              path='/services'
            />
              <CardItem
              src='images/img-0.jpg'
              text='Visit the high-lying lakes at over 2000 m above sea level'
              label='Adrenaline'
              path='/services'
            />
          </ul>
  </>
  );
}
