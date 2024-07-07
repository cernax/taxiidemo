import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Configuracion = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-8">
        <div className="grid gap-4">
          <h1 className="text-2xl font-bold">Configuraciones</h1>
          <div className="d-flex gap-4">
            <Card>
              <Card.Header>
                <Card.Title>Dollar</Card.Title>
              </Card.Header>
              <Card.Body className="grid gap-2">
                <div className="d-flex justify-content-between align-items-center">
                  <label htmlFor="dollar">Dollar:</label>
                  <div className="d-flex gap-2 align-items-center">
                    <input id="dollar" type="number" defaultValue={1} className="form-control" style={{marginLeft:'5px' }} />
                    <Button variant="outline-primary" size="sm">
                      <RefreshCcwIcon className="h-4 w-4" />
                      <span className="sr-only">Update</span>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Euro</Card.Title>
              </Card.Header>
              <Card.Body className="grid gap-2">
                <div className="d-flex justify-content-between align-items-center">
                  <label htmlFor="euro">Euro:</label>
                  <div className="d-flex gap-2 align-items-center">
                    <input id="euro" type="number" defaultValue={0.9} className="form-control" style={{marginLeft:'5px' }}/>
                    <Button variant="outline-primary" size="sm">
                      <RefreshCcwIcon className="h-4 w-4" />
                      <span className="sr-only">Update</span>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br></br>
        <div className="grid gap-4">
          <Card>
            <Card.Header>
              <Card.Title>Comisiones</Card.Title>
            </Card.Header>
            <Card.Body className="grid gap-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="admin">Admin</label>
                  <div className="d-flex gap-2 align-items-center">
                    <input id="admin" type="number" defaultValue={0.05} className="form-control" />
                    <Button variant="outline-primary" size="sm">
                      <RefreshCcwIcon className="h-4 w-4" />
                      <span className="sr-only">Update</span>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="debit">Debit</label>
                  <div className="d-flex gap-2 align-items-center">
                    <input id="debit" type="number" defaultValue={0.03} className="form-control" />
                    <Button variant="outline-primary" size="sm">
                      <RefreshCcwIcon className="h-4 w-4" />
                      <span className="sr-only">Update</span>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="credit">Credit</label>
                  <div className="d-flex gap-2 align-items-center">
                    <input id="credit" type="number" defaultValue={0.05} className="form-control" />
                    <Button variant="outline-primary" size="sm">
                      <RefreshCcwIcon className="h-4 w-4" />
                      <span className="sr-only">Update</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};
function RefreshCcwIcon(props) {
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
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    );
  }
export default Configuracion;