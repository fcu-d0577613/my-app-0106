import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>關於我們</h2>
            <Link to='/'>經營理念</Link>
            <Link to='/'>場館故事</Link>
            <Link to='/'>場地介紹</Link>
            <Link to='/'>合作夥伴</Link>
            <Link to='/'>經營團隊</Link>
          </div>
          
        
          <div class='footer-link-items'>
            <h2>場地租借</h2>
            <Link to='/'>臨時租借</Link>
            <Link to='/'>長期租借</Link>
            <Link to='/'>特約夥伴</Link>
            <Link to='/'>社團租借</Link>
          </div>
          <div class='footer-link-items'>
            <h2>社群媒體</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        407台中市西屯區文華路100號(北門側邊)體育館一樓營運中心

        </p>
        <p className='footer-subscription-text'>
          TEL    ： (04)2451-7250 #5985 
        </p>
        <div className='input-areas'>
          {/* <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form> */}
        </div>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          {/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div> */}
          <small class='website-rights'>FCU SPORTS CENTER © 2020</small>
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
