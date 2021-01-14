import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore amazing waterfalls deep inside the mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Rest on the stunning Black Sea coast. Experience a great vacation on the natural beaches'
              label='Luxury'
              path='/services'
            />
          </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Discover the beauty of architectural and historical landmarks'
              label='Adventure'
              path='/services'
            />
              <CardItem
              src='images/img-3.jpg'
              text='Taste our traditional food, recipes of hundreds of years, aromatic spices, natural products and always cooked with love'
              label='Delicacy'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Try our traditions. Immerse yourself in the magic of Bulgarian folklore'
              label='Adventure'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
              <CardItem
              src='images/img-0.jpg'
              text='Visit the high-lying lakes at over 2000 m above sea level'
              label='Adrenaline'
              path='/services'
            />
              <CardItem
              src='images/img-5.jpg'
              text='Visit the most popular bar in the country'
              label='Adrenaline'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
