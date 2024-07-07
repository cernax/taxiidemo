import React from 'react';
import { useAuth } from '../AuthContext/AuthContext';
import { Navigate, useNavigate  } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/home');
  };

  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center ">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} className="text-center">
          <div className="mb-4">
            <img
              className="mx-auto mb-3"
              src="..\src\Component\IMG\logoTaxiOficial.png"
              alt="Your Company"
              style={{ height: '200px' }} // Ajusta el tamaño de la imagen
            />
            <h2 className="mt-6 text-4xl font-extrabold text-white">Inicia sesión en tu cuenta</h2>
          </div>
          <Form className="mt-8" onSubmit={handleLogin}>
            <Form.Group controlId="emailAddress">
              <Form.Label className="sr-only">Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Correo Electrónico" required className="fs-4" />
            </Form.Group>
            <br></br>
            <Form.Group controlId="password">
              <Form.Label className="sr-only">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" required className="fs-4" />
            </Form.Group>
            <Form.Group controlId="rememberMe" className="mb-3 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                className="text-white me-2"
                style={{ backgroundColor: 'transparent', borderColor: 'white' }} 
              />
              <Form.Label className="text-black fs-6 mb-0">Recuérdame</Form.Label>
            </Form.Group>
            <Button variant="warning" type='submit' block className="fs-4">
              Iniciar sesión
            </Button>
          </Form>
          <div className="text-center mt-3">
            <a href="#" className="text-warning fs-4">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
