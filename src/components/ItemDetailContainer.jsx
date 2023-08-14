import { useEffect, useState } from "react"
import { pedirItemPorId } from "../pedirData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () =>{
     
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect (() => {
        pedirItemPorId (Number(id))
            .then ((res) => {
                setItem (res);
            })
    },[id])

    return (
        <div>
           {item && <ItemDetail item={item}/>} 
        </div>

    )
}