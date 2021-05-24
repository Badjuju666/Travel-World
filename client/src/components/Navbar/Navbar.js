import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return(
      <nav className='NavbarItems'>
        <h1 className="navbar-logo">TravelWorld <i className='fas fa-globe-americas'></i></h1>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
            <li>
              <a className={item.cName} href={item.url}>
              {item.title}</a>
            </li>
            )
          })}
        </ul>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    )
  }
}
 
export default Navbar