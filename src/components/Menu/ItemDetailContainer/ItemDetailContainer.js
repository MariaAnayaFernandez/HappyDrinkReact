import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemPorId } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item,setItem] = useState(null)
    const [dataId] = useParams()

    useEffect (()=>{

        pedirItemPorId( Number(dataId) )
        .then((data) => {
            setItem(data)

        })
    }, [dataId])

    return(
        <div>
            {
               item && <ItemDetail {...item}></ItemDetail>
            }
        </div>
    )
}