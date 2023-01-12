export const ItemDetail = ({cocteles}) =>{
    return(
            <section className="menu-cards row row-cols-1 row-cols-md-3 g-4" >
                {cocteles.map((coctel =>(
                    <div className="menu-div">
                    <img  src={require(`../../../imagenes/${coctel.img}`)}  className="card-img-top" alt="Gin Old Fashion"/>
                    <div className="card-body">
                      <h5 className="card-title titulo-tarjeta"> {coctel.nombre} </h5>
                      <p className="card-text">Categoría: {coctel.menu}</p>
                      <p className="card-text">{coctel.ingredientes}</p>
                      <div className="ordenar">
                        <p className="cantidad">${coctel.precio}.00</p>
                        <button className="btn-ordenar">Ordenar</button> 
                      </div>
                    </div>
                  </div>

                  
                )))
                }
            </section>

    )
}
