import { useEffect } from "react"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contacto = () => {
  return (
    <div className="container">
      <Form>
        <h2 className="main-titulo" >Contactanos</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="Ex via 573" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="btn_enviar" variant="primary" type="submit" >
          Enviar
        </Button>
      </Form>
    </div>
  );
}
    


export default Contacto