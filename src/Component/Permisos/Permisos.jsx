import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Form, Modal } from 'react-bootstrap';

const Permisos = () => {
    const [permissions, setPermissions] = useState([
        { id: 1, page: 'Dashboard', role: 'Admin' },
        { id: 2, page: 'Products', role: 'Seller' },
        { id: 3, page: 'Orders', role: 'Supervisor' },
        { id: 4, page: 'Payments', role: 'Payments' },
        { id: 5, page: 'Accounting', role: 'Treasurer' },
      ]);
    const [selectedRole, setSelectedRole] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [newPermission, setNewPermission] = useState({ page: '', role: '' });
  
    const handleAddPermission = () => {
        const newPerm = { id: permissions.length + 1, ...newPermission };
        setPermissions([...permissions, newPerm]);
        setNewPermission({ page: '', role: '' });
        setShowModal(false);
    };
    
    const handleDeletePermission = (id) => {
        setPermissions(permissions.filter((p) => p.id !== id));
    };
    
    const filteredPermissions = selectedRole === 'All' ? permissions : permissions.filter((p) => p.role === selectedRole);
    
    return (
        <>
        <Container className="py-4">
            <Row className="mb-4">
                <Col className="d-flex justify-content-between align-items-center">
                <h1 className="h2">Permissions Management</h1>
                <div className="d-flex align-items-center">
                    <Form.Select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="me-2">
                    <option value="All">All</option>
                    <option value="Admin">Admin</option>
                    <option value="Seller">Seller</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Payments">Payments</option>
                    <option value="Treasurer">Treasurer</option>
                    </Form.Select>
                    <Button onClick={() => setShowModal(true)}>Add New Permission</Button>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Page</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPermissions.map((permission) => (
                        <tr key={permission.id}>
                        <td>{permission.id}</td>
                        <td>{permission.page}</td>
                        <td>{permission.role}</td>
                        <td>
                            <Button variant="outline-danger" size="sm" onClick={() => handleDeletePermission(permission.id)}>
                            Delete
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </Col>
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Permission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="page">
                    <Form.Label>Page</Form.Label>
                    <Form.Control
                        type="text"
                        value={newPermission.page}
                        onChange={(e) => setNewPermission({ ...newPermission, page: e.target.value })}
                    />
                    </Form.Group>
                    <Form.Group controlId="role" className="mt-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                        as="select"
                        value={newPermission.role}
                        onChange={(e) => setNewPermission({ ...newPermission, role: e.target.value })}
                    >
                        <option value="">Select a role</option>
                        <option value="Admin">Admin</option>
                        <option value="Seller">Seller</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Payments">Payments</option>
                        <option value="Treasurer">Treasurer</option>
                    </Form.Control>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAddPermission}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </>
    );
}

export default Permisos;