import React, { Component } from 'react';
import '../style/navBar.scss';
import Logo from '../assets/logo.png';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
          <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="navbarMenu">
                <div className="navbarMenu__rectangle"></div>
                <div className="navbarMenu__rectangle"></div>
                <div className="navbarMenu__rectangle"></div>
                <div className="navbarMenu__text">
                    <div className="linkAgents">Directorio de Agentes</div>
                    <div className="linkContact">Contacto</div>
                    <div className="linkIngresar">Ingresar</div>
                </div>
            </div>
          </nav> 
      </div>
    );
  }
}

export default NavBar;