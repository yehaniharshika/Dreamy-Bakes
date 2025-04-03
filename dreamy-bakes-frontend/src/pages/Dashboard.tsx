import { Card, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { CartesianGrid, Legend, Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";

const Dashboard = () => {
    const [customerCount, setCustomerCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    const cakeSalesData = [
        { name: "Chocolate Cake", sales: 150 },
        { name: "Vanilla Cake", sales: 120 },
        { name: "Strawberry Cake", sales: 90 },
        { name: "Red Velvet", sales: 110 },
        { name: "Black Forest", sales: 100 },
    ];

    return (
        <div className="flex w-full h-full overflow-hidden">
            <Navigation />
            <div className="flex-1 p-5" style={{ backgroundColor: "#ffcccb" }}>
                <Container fluid>
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <div className="p-3 rounded" style={{ backgroundColor: "#ff6f61" }}>
                                <Container fluid>
                                    <Row className="align-items-center">
                                        <Col md={6}>
                                            <InputGroup>
                                                <FormControl placeholder="Search..." style={{ fontSize: "15px" }} />
                                                <InputGroup.Text>
                                                    <MdSearch />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                        <Col md={6} className="d-flex justify-content-end align-items-center gap-3">
                                            <SiGooglemessages size={35} />
                                            <IoNotificationsCircleOutline size={35} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gx-1 gy-1 justify-content-between">
                        {[
                            { id: "customer", count: customerCount, label: "Customers", icon: "customer.png" },
                            { id: "product", count: productCount, label: "Products", icon: "product.png" },
                            { id: "order", count: orderCount, label: "Orders", icon: "order.png" },
                            { id: "income", count: totalIncome, label: "Income", icon: "income.png" },
                        ].map((card, index) => (
                            <Col xs={6} sm={4} md={3} key={card.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Card className="h-100 shadow-lg border-3 rounded-xl" style={{ backgroundColor: "#ff6f61" }}>
                                        <Card.Body className="d-flex align-items-center p-2">
                                            <img src={`/src/icons/${card.icon}`} alt={card.id} className="me-3" style={{ width: 60, height: 60 }} />
                                            <div>
                                                <h5 className="text-white font-bold text-xl">{card.count}</h5>
                                                <small className="text-white font-bold">{card.label}</small>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <br />
                    <Row>
                        <Col md={12}>
                            <div>
                                <Card style={{ height: 400 }}>
                                    <div className="card-header font-bold">Cake Sales Analytics</div>
                                    <Card.Body>
                                        <BarChart width={640} height={320} data={cakeSalesData} margin={{ top: 12, right: 30, left: 20, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="sales" fill="#ff6f61" />
                                        </BarChart>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default Dashboard;
