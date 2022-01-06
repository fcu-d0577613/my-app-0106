import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';


function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-warpper'>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            立即預約
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
