import { toCapital } from "../toCapital"
import Item from "./Item"
import "./navbar.css"

const ItemList = ({productos, titulo}) =>{
    return (
        <div className="container" >
            <h2 className="main-titulo" >{toCapital(titulo)}</h2>
            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>

    )
}

export default ItemList