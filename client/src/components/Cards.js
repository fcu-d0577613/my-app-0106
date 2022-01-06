import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>活動消息</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/F.png'
              text='開啟你的健身宇宙吧!!!'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/新年計畫-01.png'
              text='新年新體驗 更多有氧體驗 100元!!!!'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/5a002f149f7e7-01.png'
              text='聖誕尋寶趣 快來體育館尋寶換好禮吧'  
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/1月有氧課表-01.png'
              text='一月有氧課表 現正預約中'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/1008.png'
              text='有氧套票現正熱賣中 限量100組'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
