import React, { Component } from 'react';
import '../style/bodyContent.scss';
import Agent from './Agent';

class BodyContent extends Component {
  render() {
    return (
      <div className="BodyContent">
        <div className="header">
          <div className="frame"></div>
            <div className="mainTitle">
                Los Mejores agentes de seguridad
            </div>
            <div className="searchBar">
                <input type="text" className="searchBar__title" placeholder="Buscar por Ubicacion" name="inpuSearch" id="searchBar__title"/>
            </div>
        </div>
        <Agent />
      </div>
    );
  }
}

export default BodyContent;