import React, { useState } from "react";
import { Button, Table, Modal, Form, Pagination } from "react-bootstrap";

const Cuentabanco = () => {
    const [banks, setBanks] = useState([
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          rut: "12.345.678-9",
          email: "john.doe@example.com",
          phone: "555-1234",
          bank: "Banco Santander",
          accountType: "Cuenta Corriente",
          accountNumber: "12345678-9",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          rut: "98.765.432-0",
          email: "jane.smith@example.com",
          phone: "555-5678",
          bank: "Banco de Chile",
          accountType: "Cuenta Vista",
          accountNumber: "87654321-0",
        },
        {
          id: 3,
          firstName: "Bob",
          lastName: "Johnson",
          rut: "54.321.098-7",
          email: "bob.johnson@example.com",
          phone: "555-9012",
          bank: "Banco Estado",
          accountType: "Cuenta Ahorro",
          accountNumber: "54321098-7",
        },
        {
          id: 4,
          firstName: "Alice",
          lastName: "Brown",
          rut: "77.888.999-0",
          email: "alice.brown@example.com",
          phone: "555-1111",
          bank: "Banco Santander",
          accountType: "Cuenta Corriente",
          accountNumber: "777888999-0",
        },
        {
          id: 5,
          firstName: "Michael",
          lastName: "Davis",
          rut: "11.22.33-4",
          email: "michael.davis@example.com",
          phone: "555-2222",
          bank: "Banco de Chile",
          accountType: "Cuenta Vista",
          accountNumber: "11223344-5",
        },
        {
          id: 6,
          firstName: "Emma",
          lastName: "Wilson",
          rut: "55.66.77-8",
          email: "emma.wilson@example.com",
          phone: "555-3333",
          bank: "Banco Estado",
          accountType: "Cuenta Ahorro",
          accountNumber: "55667788-9",
        },
        {
          id: 7,
          firstName: "William",
          lastName: "Clark",
          rut: "99.00.11-2",
          email: "william.clark@example.com",
          phone: "555-4444",
          bank: "Banco Santander",
          accountType: "Cuenta Corriente",
          accountNumber: "99001122-3",
        },
        {
          id: 8,
          firstName: "Olivia",
          lastName: "Roberts",
          rut: "12.34.56-7",
          email: "olivia.roberts@example.com",
          phone: "555-5555",
          bank: "Banco de Chile",
          accountType: "Cuenta Vista",
          accountNumber: "12345678-9",
        },
        {
          id: 9,
          firstName: "James",
          lastName: "Miller",
          rut: "77.88.99-0",
          email: "james.miller@example.com",
          phone: "555-6666",
          bank: "Banco Estado",
          accountType: "Cuenta Ahorro",
          accountNumber: "77889900-1",
        },
        {
          id: 10,
          firstName: "Sophia",
          lastName: "Brown",
          rut: "22.33.44-5",
          email: "sophia.brown@example.com",
          phone: "555-7777",
          bank: "Banco Santander",
          accountType: "Cuenta Corriente",
          accountNumber: "22334455-6",
        },
        {
          id: 11,
          firstName: "Alexander",
          lastName: "Wilson",
          rut: "66.77.88-9",
          email: "alexander.wilson@example.com",
          phone: "555-8888",
          bank: "Banco de Chile",
          accountType: "Cuenta Vista",
          accountNumber: "66778899-0",
        },
        {
          id: 12,
          firstName: "Isabella",
          lastName: "Clark",
          rut: "00.11.22-3",
          email: "isabella.clark@example.com",
          phone: "555-9999",
          bank: "Banco Estado",
          accountType: "Cuenta Ahorro",
          accountNumber: "00112233-4",
        },
        {
          id: 13,
          firstName: "Michael",
          lastName: "White",
          rut: "45.67.89-0",
          email: "michael.white@example.com",
          phone: "555-0000",
          bank: "Banco Santander",
          accountType: "Cuenta Corriente",
          accountNumber: "45678900-1",
        },
        {
          id: 14,
          firstName: "Emily",
          lastName: "Davis",
          rut: "99.11.22-3",
          email: "emily.davis@example.com",
          phone: "555-1111",
          bank: "Banco de Chile",
          accountType: "Cuenta Vista",
          accountNumber: "99112233-4",
        },
        {
          id: 15,
          firstName: "Matthew",
          lastName: "Johnson",
          rut: "33.44.55-6",
          email: "matthew.johnson@example.com",
          phone: "555-2222",
          bank: "Banco Estado",
          accountType: "Cuenta Ahorro",
          accountNumber: "33445566-7",
        },
      ]);
      
      const [editingBank, setEditingBank] = useState(null);
      const [editedBank, setEditedBank] = useState("");
      const [editedAccountType, setEditedAccountType] = useState("");
      const [editedAccountNumber, setEditedAccountNumber] = useState("");
      const [currentPage, setCurrentPage] = useState(1);
      const [banksPerPage] = useState(5);

      const indexOfLastBank = currentPage * banksPerPage;
      const indexOfFirstBank = indexOfLastBank - banksPerPage;
      const currentBanks = banks.slice(indexOfFirstBank, indexOfLastBank);
      
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
      const handleEditBank = (bank) => {
        setEditingBank(bank);
        setEditedBank(bank.bank);
        setEditedAccountType(bank.accountType);
        setEditedAccountNumber(bank.accountNumber);
      };
    
      const handleSaveChanges = () => {
        const updatedBanks = banks.map((bank) => {
          if (bank.id === editingBank.id) {
            return {
              ...bank,
              bank: editedBank,
              accountType: editedAccountType,
              accountNumber: editedAccountNumber,
            };
          }
          return bank;
        });
        setBanks(updatedBanks);
        setEditingBank(null);
      };

    return (
    <div className="container mx-auto my-8">
      <h2>Cuentas de banco de conductores inscritos</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>RUT</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Banco</th>
            <th>Tipo de Cuenta</th>
            <th>Número de Cuenta</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {currentBanks.map((bank) => (
            <tr key={bank.id}>
                <td>{bank.firstName}</td>
                <td>{bank.lastName}</td>
                <td>{bank.rut}</td>
                <td>{bank.email}</td>
                <td>{bank.phone}</td>
                <td>{bank.bank}</td>
                <td>{bank.accountType}</td>
                <td>{bank.accountNumber}</td>
                <td>
                <Button variant="success" size="sm" onClick={() => handleEditBank(bank)}>
                    Editar
                </Button>
                </td>
          </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {banksPerPage >= banks.length ? null : (
            <>
            {Array.from({ length: Math.ceil(banks.length / banksPerPage) }).map((_, index) => (
                <Pagination.Item key={index + 1} onClick={() => paginate(index + 1)} active={index + 1 === currentPage}>
                {index + 1}
                </Pagination.Item>
            ))}
            </>
        )}
      </Pagination>
      <Modal show={editingBank !== null} onHide={() => setEditingBank(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="bank">
              <Form.Label>Banco</Form.Label>
              <Form.Control
                as="select"
                value={editedBank}
                onChange={(e) => setEditedBank(e.target.value)}
              >
                <option value="">Selecciona un banco</option>
                <option value="Banco Santander">Banco Santander</option>
                <option value="Banco de Chile">Banco de Chile</option>
                <option value="Banco Estado">Banco Estado</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="accountType">
              <Form.Label>Tipo de Cuenta</Form.Label>
              <Form.Control
                as="select"
                value={editedAccountType}
                onChange={(e) => setEditedAccountType(e.target.value)}
              >
                <option value="">Selecciona un tipo de cuenta</option>
                <option value="Cuenta Corriente">Cuenta Corriente</option>
                <option value="Cuenta Vista">Cuenta Vista</option>
                <option value="Cuenta Ahorro">Cuenta Ahorro</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="accountNumber">
              <Form.Label>Número de Cuenta</Form.Label>
              <Form.Control
                type="text"
                value={editedAccountNumber}
                onChange={(e) => setEditedAccountNumber(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditingBank(null)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default Cuentabanco;