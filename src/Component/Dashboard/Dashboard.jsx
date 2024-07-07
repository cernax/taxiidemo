import React from "react";
import { Row, Col, Card, Form, Container } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={4} className="mb-2">
            <Card
              bg="primary"
              text={"primary" === "light" ? "dark" : "white"}
              className="mb-2"
            >
              <Card.Header>Total Tickets</Card.Header>
              <Card.Body>
                <Card.Title>345</Card.Title>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    Nuevo:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    120
                  </div>
                </div>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    En Progreso:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    80
                  </div>
                </div>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    Cerrado:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    145
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card
              bg="danger"
              text={"danger" === "light" ? "dark" : "white"}
              className="mb-2"
            >
              <Card.Header>Tickets por Prioridad</Card.Header>
              <Card.Body>
                <Card.Title>Alto</Card.Title>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    Nuevo:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    120
                  </div>
                </div>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    En Progreso:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    80
                  </div>
                </div>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    Cerrado:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    145
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card
              bg="warning"
              text={"warning" === "light" ? "dark" : "white"}
              className="mb-2"
            >
              <Card.Header>Tickets por Prioridad</Card.Header>
              <Card.Body>
                <Card.Title>Medio</Card.Title>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    Nuevo:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    120
                  </div>
                </div>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    En Progreso:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    80
                  </div>
                </div>
                <div>
                  <div style={{ display: "inline-block", marginRight: "10px" }}>
                    Cerrado:
                  </div>
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    145
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={12} className="mb-2">
            <Card text={"dark"} className="mb-2">
              <Card.Header>
                <Form.Select aria-label="Default select example">
                  <option value="1">Last 30 Days</option>
                  <option value="2">Last 60 Days</option>
                  <option value="3">Last 90 Days</option>
                </Form.Select>
              </Card.Header>
              <Card.Body>
                <Card.Title>Ventas</Card.Title>
                <Line options={options} data={data} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
