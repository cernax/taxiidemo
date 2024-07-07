import React, { useState } from 'react';
import { Table, Button, Form, FormControl, Pagination, Modal, Container  } from 'react-bootstrap';

const Usuarios = () => {
    
const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      rut: "12.345.678-9",
      email: "john.doe@example.com",
      phone: "555-1234",
      profile: "Admin",
      isActive: true,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      rut: "98.765.432-1",
      email: "jane.smith@example.com",
      phone: "555-5678",
      profile: "User",
      isActive: true,
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      rut: "54.321.987-6",
      email: "bob.johnson@example.com",
      phone: "555-9012",
      profile: "Manager",
      isActive: false,
    },
]);

const [sortColumn, setSortColumn] = useState('id');
const [sortDirection, setSortDirection] = useState('asc');
const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [usersPerPage] = useState(10);
const [showModal, setShowModal] = useState(false);
const [newUser, setNewUser] = useState({
  name: '',
  lastName: '',
  rut: '',
  email: '',
  phone: '',
  profile: '',
});

const handleOpenModal = () => {
    setShowModal(true);
  };

const handleCloseModal = () => {
    setShowModal(false);
    setNewUser({
      name: '',
      lastName: '',
      rut: '',
      email: '',
      phone: '',
      profile: '',
    });
  };

const handleSaveUser = () => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        ...newUser,
        active: true,
      },
    ]);
    handleCloseModal();
  };  

const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <>
        <div className='p-3 p-md-6'>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h2 mb-0">User Management</h1>
                <Button onClick={handleOpenModal}>Add User</Button>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{newUser.id ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={newUser.lastName}
                        onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRUT">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control
                        type="text"
                        value={newUser.rut}
                        onChange={(e) => setNewUser({ ...newUser, rut: e.target.value })}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        value={newUser.phone}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProfile">
                    <Form.Label>Profile</Form.Label>
                    <Form.Select
                        value={newUser.profile}
                        onChange={(e) => setNewUser({ ...newUser, profile: e.target.value })}
                    >
                        <option value="">Select profile</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="User">User</option>
                    </Form.Select>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSaveUser}>
                    {newUser.id ? 'Update' : 'Save'}
                </Button>
                </Modal.Footer>
            </Modal>
            <Container className="my-4">
                <Form className="mb-3">
                    <Form.Group controlId="search">
                    <FormControl
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search users"
                    />
                    </Form.Group>
                </Form>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th onClick={() => handleSort('id')} style={{cursor:'pointer'}} >
                        ID {sortColumn === 'id' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => handleSort('firstName')} style={{cursor:'pointer'}} >
                        First Name {sortColumn === 'firstName' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => handleSort('lastName')} style={{cursor:'pointer'}} >
                        Last Name {sortColumn === 'lastName' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => handleSort('rut')} style={{cursor:'pointer'}} >
                        RUT {sortColumn === 'rut' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => handleSort('email')} style={{cursor:'pointer'}} >
                        Email {sortColumn === 'email' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => handleSort('phone')} style={{cursor:'pointer'}} >
                        Phone {sortColumn === 'phone' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => handleSort('profile')} style={{cursor:'pointer'}} >
                        Profile {sortColumn === 'profile' && (sortDirection === 'asc' ? '▲' : '▼')}
                        </th>
                        <th  style={{cursor:'default'}} >Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.rut}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.profile}</td>
                        <td>
                            <Button variant="outline-secondary" className="me-2">
                            Edit
                            </Button>
                            <Button variant={user.isActive ? 'danger' : 'success'} className="me-2">
                            {user.isActive ? 'Deactivate' : 'Activate'}
                            </Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Pagination>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                    ))}
                </Pagination>
                </Container>
        </div>
    </>
    );
};

export default Usuarios;