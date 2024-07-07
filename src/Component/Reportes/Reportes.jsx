import React, { useState, useMemo } from "react"
import { Button, Form, Table, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"
import { Check, X } from "react-bootstrap-icons"

const NuevoElemento = () => {
    const [filters, setFilters] = useState({
        dateRange: {
          start: null,
          end: null,
        },
        timeRange: {
          start: null,
          end: null,
        },
        reportType: "general",
        seller: null,
        driver: "",
      });

    const [tickets, setTickets] = useState([
        {
          id: "TK001",
          destination: "Santiago",
          amount: 25000,
          date: "2023-05-01 10:30",
          currency: "CLP",
          paymentMethod: "Credit Card",
          sellerRut: "12.345.678-9",
          status: "Paid",
          isSupervisorSale: false,
          isReplacementSale: false,
        },
        {
          id: "TK002",
          destination: "Valparaíso",
          amount: 18000,
          date: "2023-05-02 15:45",
          currency: "CLP",
          paymentMethod: "Cash",
          sellerRut: "98.765.432-0",
          status: "Pending",
          isSupervisorSale: false,
          isReplacementSale: true,
        },
        {
          id: "TK003",
          destination: "Concepción",
          amount: 32000,
          date: "2023-05-03 09:20",
          currency: "CLP",
          paymentMethod: "Debit Card",
          sellerRut: "12.345.678-9",
          status: "Paid",
          isSupervisorSale: true,
          isReplacementSale: false,
        },
      ])
      
    const filteredTickets = useMemo(() => {
        let filtered = tickets
        if (filters.dateRange.start && filters.dateRange.end) {
          filtered = filtered.filter((ticket) => {
            const ticketDate = new Date(ticket.date)
            return ticketDate >= filters.dateRange.start && ticketDate <= filters.dateRange.end
          })
        }
        if (filters.timeRange.start && filters.timeRange.end) {
            filtered = filtered.filter((ticket) => {
              const ticketTime = new Date(ticket.date).getHours();
              return ticketTime >= filters.timeRange.start.getHours() && ticketTime <= filters.timeRange.end.getHours();
            });
          }
        if (filters.reportType === "seller" && filters.seller) {
          filtered = filtered.filter((ticket) => ticket.sellerRut === filters.seller)
        }
        if (filters.reportType === "driver" && filters.driver) {
          filtered = filtered.filter((ticket) => ticket.driver.toLowerCase().includes(filters.driver.toLowerCase()))
        }
        return filtered
      }, [tickets, filters])
    
    const handleExportToExcel = () => {
        console.log("Exporting to Excel...")
      }
      
    return (
<div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Reportes</h1>
      </div>
      <div className="mb-6">
        <Form>
        <Row className="align-items-end">
            <Col md={4}>
              <Form.Group controlId="dateRange">
                <Form.Label>Rango Fechas</Form.Label>                
                    <div className="d-flex">
                        <DatePicker
                        selected={filters.dateRange.start}
                        onChange={(dates) => {
                            const [start, end] = dates;
                            setFilters({
                            ...filters,
                            dateRange: { start, end },
                            });
                        }}
                        startDate={filters.dateRange.start}
                        endDate={filters.dateRange.end}
                        selectsRange
                        isClearable
                        className="form-control"
                        placeholderText="Select date range"
                        />
                    </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="timeRange">
                <Form.Label>Rango Horas</Form.Label>
                <div className="d-flex">
                  <DatePicker
                    selected={filters.timeRange.start}
                    onChange={(date) => setFilters({ ...filters, timeRange: { ...filters.timeRange, start: date } })}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Start Time"
                    dateFormat="h:mm aa"
                    className="form-control mr-2"
                    placeholderText="Start Time"
                  />
                  <DatePicker
                    selected={filters.timeRange.end}
                    onChange={(date) => setFilters({ ...filters, timeRange: { ...filters.timeRange, end: date } })}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="End Time"
                    dateFormat="h:mm aa"
                    className="form-control"
                    placeholderText="End Time"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        
        <Form.Group controlId="reportType" className="mt-4">
            <Form.Label>Tipo de Reportes</Form.Label>
            <Form.Control
              as="select"
              value={filters.reportType}
              onChange={(e) =>
                setFilters({ ...filters, reportType: e.target.value, seller: null, driver: "" })
              }
            >
              <option value="general">General Report</option>
              <option value="seller">Seller Report</option>
              <option value="driver">Driver Report</option>
            </Form.Control>
        </Form.Group>
          {filters.reportType === "seller" && (
            <Form.Group controlId="seller" className="mt-4">
              <Form.Label>Seller</Form.Label>
              <Form.Control
                as="select"
                value={filters.seller}
                onChange={(e) =>
                  setFilters({ ...filters, seller: e.target.value })
                }
              >
                <option value="12.345.678-9">Seller 1</option>
                <option value="98.765.432-0">Seller 2</option>
              </Form.Control>
            </Form.Group>
          )}
          {filters.reportType === "driver" && (
            <Form.Group controlId="driver" className="mt-4">
              <Form.Label>Driver</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter driver name"
                value={filters.driver}
                onChange={(e) =>
                  setFilters({ ...filters, driver: e.target.value })
                }
              />
            </Form.Group>
          )}
        </Form>
      </div>
      <br></br>
      <div className="mb-6">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ticket #</th>
              <th>Destination</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Currency</th>
              <th>Payment Method</th>
              <th>Seller RUT</th>
              <th>Status</th>
              <th>Supervisor Sale</th>
              <th>Replacement Sale</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.destination}</td>
                <td>${ticket.amount.toLocaleString()}</td>
                <td>{ticket.date}</td>
                <td>{ticket.currency}</td>
                <td>{ticket.paymentMethod}</td>
                <td>{ticket.sellerRut}</td>
                <td>{ticket.status}</td>
                <td>{ticket.isSupervisorSale ? <Check color="green" /> : <X color="red" />}</td>
                <td>{ticket.isReplacementSale ? <Check color="green" /> : <X color="red" />}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-end">
        <Button onClick={handleExportToExcel}>Export to Excel</Button>
      </div>
    </div>
    );
};

export default NuevoElemento;