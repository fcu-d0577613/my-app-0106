import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";


function Navbar(props) {
  let {currentUser, setCurrentUser} =props;
  const navigate = useNavigate();
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  

  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout Successfully, now you are redirect to the homepage.");
    setCurrentUser(null);
    navigate("/");
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FCU
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                首頁
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                最新消息
              </Link>
            </li> */}

            <li className='nav-item'>
              <Link
                to='/gymTable'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                健身房
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/abericTable'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                有氧課表
              </Link>
            </li>
            
            {!currentUser && (<li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                登入
              </Link>
            </li>)}

            {currentUser && (<li className='nav-item'>
              <Link
                to='/myTicket'
                className='nav-links'
                onClick={closeMobileMenu}
                
              >
                我的票券
              </Link>
            </li>)}  

            {currentUser && (<li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu, handleLogout}
                
              >
                登出
              </Link>
            </li>)}

          </ul>
            {/* {button && <Button buttonStyle='btn--outline'>登入</Button>} */}

          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
