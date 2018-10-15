import React, { Component } from 'react';
import '../style/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footer">
            <div className="footer__authorized">
                Desarrollado por Akurey.com Todos los Derechos Reservados.</div>
            <div className="footer__copyright">Términos y Condiciones</div>
        </footer>
      </div>
    );
  }
}

export default Footer;