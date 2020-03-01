import React from 'react';
import './Header.scss';

const Header = () => (
  <header className='header'>
    <div className="left" />
    
    <div className="center">
      <a className="title" href="/">Saima Junaid</a>
    </div>
    
    <div className="right" >
      <nav>
        <ul>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;