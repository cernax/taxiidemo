import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Pagination } from 'react-bootstrap';

const ticketData = [
    { ticket: 'INV001', destino: 'Santiago', valor: '$50,000', pago: 'Crédito', transbank: '123456789', moneda: 'CLP', fecha: '2023-06-01', estado: 'Pagado' },
    { ticket: 'INV002', destino: 'Valparaíso', valor: '$30,000', pago: 'Débito', transbank: '987654321', moneda: 'CLP', fecha: '2023-05-30', estado: 'Pagado' },
    { ticket: 'INV003', destino: 'Concepción', valor: '$80,000', pago: 'Efectivo', transbank: '-', moneda: 'CLP', fecha: '2023-05-28', estado: 'Pagado' },
    { ticket: 'INV004', destino: 'Arica', valor: '$100,000', pago: 'Crédito', transbank: '456789123', moneda: 'CLP', fecha: '2023-05-25', estado: 'Pagado' },
    { ticket: 'INV005', destino: 'Punta Arenas', valor: '$70,000', pago: 'Débito', transbank: '789456123', moneda: 'CLP', fecha: '2023-05-20', estado: 'Pagado' },

    { ticket: 'INV006', destino: 'Antofagasta', valor: '$60,000', pago: 'Crédito', transbank: '111111111', moneda: 'CLP', fecha: '2023-06-02', estado: 'Pagado' },
    { ticket: 'INV007', destino: 'Iquique', valor: '$40,000', pago: 'Débito', transbank: '222222222', moneda: 'CLP', fecha: '2023-06-03', estado: 'Pagado' },
    { ticket: 'INV008', destino: 'Temuco', valor: '$90,000', pago: 'Efectivo', transbank: '-', moneda: 'CLP', fecha: '2023-06-04', estado: 'Pagado' },
    { ticket: 'INV009', destino: 'La Serena', valor: '$110,000', pago: 'Crédito', transbank: '333333333', moneda: 'CLP', fecha: '2023-06-05', estado: 'Pagado' },
    { ticket: 'INV010', destino: 'Rancagua', valor: '$80,000', pago: 'Débito', transbank: '444444444', moneda: 'CLP', fecha: '2023-06-06', estado: 'Pagado' },
    { ticket: 'INV011', destino: 'Talca', valor: '$55,000', pago: 'Crédito', transbank: '555555555', moneda: 'CLP', fecha: '2023-06-07', estado: 'Pagado' },
    { ticket: 'INV012', destino: 'Chillán', valor: '$65,000', pago: 'Débito', transbank: '666666666', moneda: 'CLP', fecha: '2023-06-08', estado: 'Pagado' }
];

function getTicketData() {
    return ticketData;
}
  
function MisVentas() {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 5;

    useEffect(() => {
        const data = getTicketData();
        setTickets(data);
    }, []);

    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);
  
    const totalPages = Math.ceil(tickets.length / ticketsPerPage);
  
    const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
    <div className="bg-light min-vh-100 py-4">
        <Container fluid="md">
            <Row className="gy-4">
            <Col xs={12} sm={6} lg={4}>
                <Card className="text-center">
                <Card.Body>
                    <TicketIcon className="w-8 h-8 text-primary" />
                    <Card.Title className="display-4">12,345</Card.Title>
                    <Card.Text className="text-muted">Tickets vendidos</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={4}>
                <Card className="text-center">
                <Card.Body>
                    <DollarSignIcon className="w-8 h-8 text-primary" />
                    <Card.Title className="display-4">$123,456</Card.Title>
                    <Card.Text className="text-muted">Ventas en CLP</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={4}>
                <Card className="text-center">
                <Card.Body>
                    <DollarSignIcon className="w-8 h-8 text-primary" />
                    <Card.Title className="display-4">$1,234</Card.Title>
                    <Card.Text className="text-muted">Ventas en USD</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={4}>
                <Card className="text-center">
                <Card.Body>
                    <EuroIcon className="w-8 h-8 text-primary" />
                    <Card.Title className="display-4">€1,234</Card.Title>
                    <Card.Text className="text-muted">Ventas en EUR</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={4}>
                <Card className="text-center">
                <Card.Body>
                    <CreditCardIcon className="w-8 h-8 text-primary" />
                    <Card.Title className="display-4">$98,765</Card.Title>
                    <Card.Text className="text-muted">Ventas en débito</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} lg={4}>
                <Card className="text-center">
                <Card.Body>
                    <CreditCardIcon className="w-8 h-8 text-primary" />
                    <Card.Title className="display-4">$54,321</Card.Title>
                    <Card.Text className="text-muted">Ventas en crédito</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col>
                <h2>Últimas Ventas</h2>
                <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Ticket</th>
                    <th>Destino</th>
                    <th>Valor</th>
                    <th>Pago</th>
                    <th>Transbank</th>
                    <th>Moneda</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTickets.map((ticket, index) => (
                    <tr key={index}>
                        <td className="fw-bold">{ticket.ticket}</td>
                        <td>{ticket.destino}</td>
                        <td>{ticket.valor}</td>
                        <td>{ticket.pago}</td>
                        <td>{ticket.transbank}</td>
                        <td>{ticket.moneda}</td>
                        <td>{ticket.fecha}</td>
                        <td>{ticket.estado}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
                <Pagination className="justify-content-center mt-4">
                    <Pagination.First onClick={() => handleClick(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handleClick(index + 1)}>
                        {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => handleClick(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
            </Col>
            </Row>
        </Container>
    </div>
    );
}
function CreditCardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    );
  }
  
  function DollarSignIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  
  function EuroIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10h12" />
        <path d="M4 14h9" />
        <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
      </svg>
    );
  }
  function TicketIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    );
}
export default MisVentas;