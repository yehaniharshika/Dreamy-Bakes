import {
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { color, motion } from "framer-motion";
import {
  CartesianGrid,
  Legend,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";

const Dashboard = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const cakeSalesData = [
    { name: "Chocolate", sales: 150 },
    { name: "Vanilla", sales: 120 },
    { name: "Strawberry", sales: 90 },
    { name: "Red Velvet", sales: 110 },
    { name: "Black Forest", sales: 100 },
    { name: "Blueberry", sales: 130 },
  ];

  const incomeData = [
    { name: "Jan", income: 5000, target: 7000 },
    { name: "Feb", income: 6500, target: 7000 },
    { name: "Mar", income: 7000, target: 7000 },
    { name: "Apr", income: 10000, target: 8500 },
    { name: "May", income: 7500, target: 8000 },
    { name: "Jun", income: 5000, target: 7000 },
    { name: "Jul", income: 6500, target: 7000 },
    { name: "Aug", income: 7000, target: 7000 },
    { name: "Sep", income: 7200, target: 7500 },
    { name: "Oct", income: 7500, target: 8000 },
  ];

  return (
    <div className="flex w-full h-full overflow-hidden">
      <Navigation />
      <div className="flex-1 p-5" style={{ backgroundColor: "#b78fa8" }}>
        <Container fluid>
          <Row className="align-items-center mb-3">
            <Col md={12}>
              <div
                className="p-3 rounded"
                style={{ backgroundColor: "#a97897", marginTop: "60px" }}
              >
                <Container fluid>
                  <Row className="align-items-center">
                    <p
                      style={{
                        color: "#6F1E51",
                        fontFamily: "'Lilita One', cursive",
                        fontSize: "22px",
                      }}
                    >
                      At DreamyBake Cake Shop, we create sweet memories with our
                      exquisite cakes, made from the finest ingredients and
                      celebrating love and joy in every bite ...
                    </p>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>

          <Row className="gx-1 gy-1 justify-content-between">
            {[
              {
                id: "customer",
                count: customerCount,
                label: "Customers",
                icon: "customer.png",
              },
              {
                id: "product",
                count: productCount,
                label: "Products",
                icon: "cake.png",
              },
              {
                id: "order",
                count: orderCount,
                label: "Orders",
                icon: "orders.png",
              },
              {
                id: "income",
                count: totalIncome,
                label: "Income",
                icon: "income.png",
              },
            ].map((card, index) => (
              <Col xs={6} sm={4} md={3} key={card.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{padding:"40px"}}
                >
                  <Card
                    className="shadow-lg border-4 rounded-xl d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#a97897",
                      borderColor: "#4e1539",
                      padding:"27px",
                    }}
                  >
                    <Card.Body className="d-flex align-items-center p-2">
                      <img
                        src={`/src/assets/images/${card.icon}`}
                        alt={card.id}
                        className="me-3"
                        style={{ width: 60, height: 60 }}
                      />
                      <div>
                        <h5
                          className="text-white font-bold text-xl"
                          style={{
                            fontFamily: "'Montserrat', serif",
                            fontSize: "20px",
                            color:"#6F1E51"
                          }}
                        >
                          {card.count}
                        </h5>
                        <small
                          className="text-white font-bold"
                          style={{
                            fontFamily: "'Montserrat', serif",
                            fontSize: "17px",
                          }}
                        >
                          {card.label}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <br />
          <Row>
              <Col md={6} style={{border:3,borderColor:"#6F1E51"}}>
                <Card style={{ height: 430 ,backgroundColor:"#a97897",border:3,borderColor:"#6F1E51"}}>
                  <div className="card-header font-bold" style={{fontFamily: "'Montserrat', serif",color:"white"}}>Cake Sales Analytics</div>
                  <Card.Body>
                    <BarChart 
                    width={640} 
                    height={320} 
                    data={cakeSalesData}
                    style={{ fontFamily: "'Ubuntu', sans-serif",
                        fontWeight: "bold",
                        color:"white"
                    }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#833471" />
                    </BarChart>
                  </Card.Body>
                </Card>
              </Col>
  
              <Col md={6}>
                <Card style={{ height: 430 ,backgroundColor:"#a97897"}}>
                  <div className="card-header font-bold" style={{fontFamily: "'Montserrat', serif",color:"white"}}>Monthly Income Analytics</div>
                  <Card.Body>
                    <LineChart
                        width={640} 
                        height={320} 
                        data={incomeData}
                        style={{ fontFamily: "'Ubuntu', sans-serif",
                            fontWeight: "bold",
                            color:"white"
                        }}>
        
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="income" stroke="#1B1464" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="target" stroke="#6F1E51" />
                    </LineChart>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};
export default Dashboard;
