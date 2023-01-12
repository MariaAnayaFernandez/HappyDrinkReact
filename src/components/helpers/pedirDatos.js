import allDrinks from "./Datos";

export const pedirDatos = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout (() =>{
            resolve (allDrinks)
        }, 3000)
    })
}

export const pedirItemPorId = (dataId) => {
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const item = allDrinks.find((el) => el.dataId === dataId)
        resolve (item)
        }, 2000)
    })
}