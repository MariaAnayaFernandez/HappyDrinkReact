

export const ItemList = ({cocteles}) =>{
    return(
        <div className="menu-principal">
            <h2 className="titulo-menu">Menú Happy Drink</h2>
            <hr/>

            <div className="catego">
                <a className="catego-a" href="/menu">Todos |</a>
                <a className="catego-a" href="/menu/clasicos">Clásicos |</a>
                <a className="catego-a" href="/menu/especialidades">Especialidades |</a>
                <a className="catego-a" href="/menu/temporada">Temporada |</a>
            </div>


            <section className="menu-cards row row-cols-1 row-cols-md-3 g-4" >
                {cocteles.map((coctel =>(
                    <div className="menu-div">
                    <img  src={require(`../../../imagenes/${coctel.img}`)}  className="card-img-top" alt="Gin Old Fashion"/>
                    <div className="card-body">
                      <h5 className="card-title titulo-tarjeta"> {coctel.nombre} </h5>
                      <p className="card-text">Categoría: {coctel.categoria}</p>
                      <p className="card-text">{coctel.ingredientes}</p>
                      <div className="ordenar">
                        <p className="cantidad">${coctel.precio}.00</p>
                        <button className="btn-ordenar">Ordenar</button> 
                        <a className="btn-ordenar" href={`/menu/${coctel.dataId}`}>Ver Detalle</a> 
                      </div>
                    </div>
                  </div>

                  
                )))
                }
            </section>



        </div>
    )
}
