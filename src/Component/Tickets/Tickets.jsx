import React, { useState, useMemo } from 'react';
import { InputGroup, DropdownButton, Dropdown, Button, Table, Badge } from 'react-bootstrap';
import { BiSortUp, BiSortDown } from 'react-icons/bi';

const Tickets = () => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState({ key: "id", order: "asc" });
    const [tickets, setTickets] = useState([
        {
          id: "TKT006",
          destination: "Puerto Montt",
          amount: 30000,
          date: "2023-07-10",
          currency: "CLP",
          paymentMethod: "Debit Card",
          transbank: "87654321",
          sellerRut: "23.456.789-0",
          status: "Paid",
        },
        {
          id: "TKT007",
          destination: "Aysén",
          amount: 18000,
          date: "2023-08-05",
          currency: "CLP",
          paymentMethod: "Cash",
          transbank: "98765432",
          sellerRut: "34.567.890-1",
          status: "Pending",
        },
        {
          id: "TKT008",
          destination: "Punta Arenas",
          amount: 40000,
          date: "2023-09-20",
          currency: "CLP",
          paymentMethod: "Credit Card",
          transbank: "13579086",
          sellerRut: "45.678.901-2",
          status: "Pending",
        },
        {
          id: "TKT009",
          destination: "Iquique",
          amount: 22000,
          date: "2023-10-15",
          currency: "CLP",
          paymentMethod: "Debit Card",
          transbank: "24680135",
          sellerRut: "56.789.012-3",
          status: "Paid",
        },
        {
          id: "TKT010",
          destination: "Copiapó",
          amount: 27000,
          date: "2023-11-08",
          currency: "CLP",
          paymentMethod: "Cash",
          transbank: "97531824",
          sellerRut: "67.890.123-4",
          status: "Paid",
        },
      ]);
    const handleSearch = (e) => setSearch(e.target.value);

    const handleSort = (key) => {
      if (sort.key === key) {
        setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
      } else {
        setSort({ key, order: "asc" });
      }
    };
  
    const filteredTickets = useMemo(() =>
      tickets.filter((ticket) => {
        const searchValue = search.toLowerCase();
        return (
          ticket.id.toLowerCase().includes(searchValue) ||
          ticket.destination.toLowerCase().includes(searchValue) ||
          ticket.amount.toString().includes(searchValue) ||
          ticket.date.includes(searchValue) ||
          ticket.currency.toLowerCase().includes(searchValue) ||
          ticket.paymentMethod.toLowerCase().includes(searchValue) ||
          ticket.transbank.includes(searchValue) ||
          ticket.sellerRut.includes(searchValue) ||
          ticket.status.toLowerCase().includes(searchValue)
        );
      }).sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      }),
      [search, sort, tickets]
    );

    return (
        <div className="container py-4">
        <div className="d-flex align-items-center mb-3">
          <InputGroup className="w-50">
            <InputGroup.Text>Buscar tickets</InputGroup.Text>
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
          <DropdownButton
            id="dropdown-basic-button"
            title={`Ordenar por ${sort.key}`}
            variant="outline-secondary"
            className="ms-3"
          >
            <Dropdown.Item onClick={() => handleSort("id")}>Número de ticket</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("destination")}>Destino</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("amount")}>Valor</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("date")}>Fecha</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("currency")}>Moneda</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("paymentMethod")}>Forma de pago</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("transbank")}>Código Transbank</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("sellerRut")}>RUT del vendedor</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort("status")}>Estado</Dropdown.Item>
          </DropdownButton>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Destino</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Moneda</th>
              <th>Forma de pago</th>
              <th>Transbank</th>
              <th>RUT vendedor</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="font-medium">{ticket.id}</td>
                <td>{ticket.destination}</td>
                <td className="text-right">${ticket.amount.toLocaleString()}</td>
                <td>{ticket.date}</td>
                <td>{ticket.currency}</td>
                <td>{ticket.paymentMethod}</td>
                <td>{ticket.transbank}</td>
                <td>{ticket.sellerRut}</td>
                <td>
                  <Badge variant={ticket.status === "Paid" ? "success" : "warning"}>{ticket.status}</Badge>
                </td>
                <td>
                  <Button variant="outline-secondary" size="sm">Generar boucher</Button>
                  {ticket.status === "Pending" && (
                    <>
                      <Button variant="outline-secondary" size="sm">Marcar como pagado</Button>
                      <DropdownButton
                        id={`dropdown-basic-button-${ticket.id}`}
                        title="Forma de pago"
                        size="sm"
                        variant="outline-secondary"
                      >
                        <Dropdown.Item>Efectivo</Dropdown.Item>
                        <Dropdown.Item>Tarjeta de crédito</Dropdown.Item>
                        <Dropdown.Item>Tarjeta de débito</Dropdown.Item>
                      </DropdownButton>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
};

export default Tickets;