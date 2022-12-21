import ModalCuenta from '../ModalCuenta/ModalCuenta';
import './NavBar.scss'

  export const NavBar = (props) => {

    return (
      <header className="header">
        
        <nav className="nav_bar navbar navbar-expand-lg nav-fix">
          <a href="#"><img src={require("../../imagenes/logo.png")}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="div_nav collapse navbar-collapse menu-div" id="navbarNav">
            <a className="text_nav_bar" href="#">Inicio</a>
            <a className="text_nav_bar" href="#">Menú</a>
            <a>
              <ModalCuenta></ModalCuenta>
            </a>
          </div>

          
        </nav>

      </header>
    );
  }