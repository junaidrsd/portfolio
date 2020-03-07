import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className='header'>
    <div className="left" >Contact</div>
    
    <div className="center">
      <Link className="title" to="/">Saima Junaid</Link>
    </div>
    
    <div className="right" >
      <nav>
        <ul>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;