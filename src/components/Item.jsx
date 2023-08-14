import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./navbar.css"

const Item = ({producto}) =>{
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Img className="img_producto" variant="top" src={producto.img} />
        <Card.Body className="detalles" >  
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text> Precio: ${producto.precio} </Card.Text>
          <Button><Link className="ver_mas" to={`/item/${producto.id}`}>Ver más</Link></Button>
        </Card.Body>
      </Card>
    )
}

export default Item