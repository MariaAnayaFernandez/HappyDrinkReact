import ModalCuenta from '../ModalCuenta/ModalCuenta';
import './NavBar.scss'


  export const NavBar = (props) => {

    return (
      <header className="header">
        
        <nav className="nav_bar navbar navbar-expand-lg nav-fix">

          <a href="#"><img src={require("../../imagenes/logo.png")}></img></a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="div_nav collapse navbar-collapse menu-div" id="navbarNav">
            <a className="text_nav_bar nav-link" href="/">Inicio</a>
            <a className="text_nav_bar nav-link" href="/menu">Menú</a>
            <a className="nav-link">
              <ModalCuenta></ModalCuenta>
            </a>
          </div>
      

          
        </nav>

      </header>
    );
  }