import './Footer.scss'
import logo from '../../imagenes/logo.png'

export const Footer = () => {
    return (
        <footer>

        <div className="linea-footer"></div>
            <div className="container_footer">
  
                <div className="box_footer footer-redes">
                    <h2><a className="menu-footer" href="/menu">Menú</a></h2>
                    <div className="redes">
                      <a href="https://es-la.facebook.com/" target="_blank"><i className="bi bi-facebook"></i></a>
                      <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
  
                <div className ="box_footer">
                    <div className="logo_footer">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
  
                <div className="box_footer">
                  <div className="texto_footer">
                    <p>
                      En Happy Drink nos especializamos en coctelería premium que inunda  todos tus sentidos.
                    </p>
                </div>
              </div>
            </div>
            <hr/>
             <div>
                <p className="box_copy">Todo con medida | Happy Drink 2022</p>
            </div>
          
    </footer>
    )
}