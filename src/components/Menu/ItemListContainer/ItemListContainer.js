import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.scss"


export const ItemListContainer = () =>{

  const [cocteles,setCocteles] = useState([])
  const {categoria} = useParams()

  useEffect(()=>{
    pedirDatos()
      .then((res) =>{
        if (categoria){
          setCocteles(res.filter(coct => coct.categoria === categoria))
        }else{
          setCocteles(res)
        } 
      })

      .catch((err) =>{
        console.log(err)
      })
  }, [categoria])

  

  return(
<div>
  <ItemList cocteles={cocteles}/>
</div>
  )
    
}