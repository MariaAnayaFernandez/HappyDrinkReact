import './PromoBox.scss'
import seccion1 from '../../../imagenes/seccion1.png'

export const PromoBox = () => {
    return (
        <section className="seccion1">
        <div className="imagen-secc-1">
          <img src={seccion1}/>
        </div> 
        <div className="promocion">
          <div className="texto-secc-1">
            <h5>¡Disfruta, come y bebe que la vida es breve!</h5>
            <h2>Promos de la semana:</h2>
          </div> 
          <div className="card-group grupo-tarjeta">
            <div className="card border-non">
              <div className="card-body">
                <h5 className="card-title">Miércoles</h5>
                <p className="card-text">Happy Drinks de temporada 2x1</p>
              </div>
            </div>
            <div className="card border-non">
              <div className="card-body">
                <h5 className="card-title">Jueves</h5>
                <p className="card-text">Todos los Happy Drinks a $50 MNX</p>
              </div>
            </div>
            <div className="card border-non">
              <div className="card-body">
                <h5 className="card-title">Viernes</h5>
                <p className="card-text">Especialidades de la casa al 3x2</p>
              </div>
            </div>
          </div>
          </div>
      </section>
    )
}