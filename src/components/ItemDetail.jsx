import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({item}) =>{
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text> {item.descripcion} </Card.Text>
                <Card.Text> $ {item.precio} </Card.Text>
                <Card.Text>Categoria: {item.categoria}  </Card.Text>
            </Card.Body>
            <Button>Añadir al carrito</Button>
        </Card>
    )
}

export default ItemDetail















        /*
        <div className="container" >
            <div>
                <img src={item.img} />
                <div>
                    <h3 className="nombre">{item.nombre}</h3> 
                    <p className="descripcion"> {item.descripcion} </p>
                    <p className="categoria">Categoria: {item.categoria} </p>
                    <p className="precio">$ {item.precio} </p>
                </div>
            </div>
        </div>
        */
