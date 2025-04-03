import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { Navigation } from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

const CustomerPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNum, setContactNum] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const customers = useSelector((state: RootState) => state.customers);

  const handleSave = () => {
    // Implement customer save logic here
    console.log("Saving customer:", {
      customerId,
      customerName,
      address,
      contactNum,
    });
  };

  const handleUpdate = () => {
    // Implement customer update logic here
    console.log("Updating customer:", {
      customerId,
      customerName,
      address,
      contactNum,
    });
  };

  const handleDelete = (customerId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent row click when deleting
    console.log("Deleting customer with ID:", customerId);
  };

  return (
    <>
      <div className="flex overflow-hidden bg-emerald-200">
        <Navigation />
        <div className="flex-1 p-5" style={{ backgroundColor: "#b78fa8" }}>
          <Container fluid>
            <Row className="align-items-center mb-3">
              <Col md={12}>
                <motion.div
                  className="p-3 rounded top-50"
                  style={{ backgroundColor: "#a97897" }}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Container fluid>
                    <Row className="align-items-center">
                      <motion.h4
                        className="font-bold text-2xl text-neutral-100"
                        style={{
                          color: "#6F1E51",
                          fontFamily: "'Lilita One', cursive",
                          fontSize: "23px",
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        Customer Management
                      </motion.h4>
                    </Row>
                  </Container>
                </motion.div>
              </Col>
            </Row>
            <br />
            <div className="flex justify-between items-center mb-4">
              <Button
                onClick={handleShow}
                className="h-10 max-w-40 font-bold"
                style={{
                  fontFamily: "'Montserrat', serif",
                  fontSize: "15px",
                  fontWeight: "bold",
                  backgroundColor: "#591841",
                  border:2,
                  borderColor: "#6F1E51"
                }}
              >
                + Customer
              </Button>

              <div className="w-1/3">
                <InputGroup>
                  <FormControl
                    className="border-2 border-black"
                    style={{
                      fontFamily: "'Montserrat', serif",
                      fontSize: "15px",
                    }}
                    placeholder="Search Customer..."
                  />
                  <InputGroup.Text className="cursor-pointer border-2 border-black">
                    <MdSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title
                  className="font-bold"
                  style={{
                    fontFamily: "'Montserrat', serif",
                    fontWeight: "600",
                  }}
                >
                  Customer Details Form
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: "#a97897" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label
                      className="font-bold"
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                      Customer ID
                    </Form.Label>
                    <Form.Control
                      className="border-2 border-black"
                      style={{
                        fontFamily: "'Montserrat', serif",
                        fontSize: "15px",
                        fontWeight: "550",
                        color: "darkblue",
                      }}
                      type="text"
                      value={customerId}
                      onChange={(e) => setCustomerId(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      className="font-bold"
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                      Customer Name
                    </Form.Label>
                    <Form.Control
                      className="border-2 border-black font-normal"
                      style={{
                        fontFamily: "'Montserrat', serif",
                        fontSize: "15px",
                      }}
                      type="text"
                      value={customerName}
                      placeholder="Enter customer name"
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      className="font-bold"
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                      Customer Email
                    </Form.Label>
                    <Form.Control
                      className="border-2 border-black font-normal"
                      style={{
                        fontFamily: "'Montserrat', serif",
                        fontSize: "15px",
                      }}
                      type="email"
                      value={customerName}
                      placeholder="Enter customer name"
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      className="font-bold"
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                      Address
                    </Form.Label>
                    <Form.Control
                      className="border-2 border-black font-normal"
                      style={{
                        fontFamily: "'Montserrat', serif",
                        fontSize: "15px",
                      }}
                      type="text"
                      value={address}
                      placeholder="Enter customer address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      className="font-bold"
                      style={{
                        fontFamily: "'Montserrat', serif",
                        fontSize: "15px",
                      }}
                    >
                      Contact Number
                    </Form.Label>
                    <Form.Control
                      className="border-2 border-black font-normal"
                      style={{
                        fontFamily: "'Montserrat', serif",
                        fontSize: "15px",
                      }}
                      type="text"
                      value={contactNum}
                      placeholder="Enter number"
                      onChange={(e) => setContactNum(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="font-bold"
                  variant="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  className="font-bold"
                  variant="success"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
                <Button
                  className="font-bold"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <br />
            <div className="overflow-x-auto overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-md">
              <Table
                striped
                bordered
                hover
                responsive
                className="w-full text-center border border-gray-300"
              >
                <thead className="bg-red-500 text-white">
                  <tr
                    className="font-bold"
                    style={{ fontFamily: "'Ubuntu', sans-serif" }}
                  >
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact Num</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.customerId}>
                      <td>{customer.customerId}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.address}</td>
                      <td>{customer.contactNum}</td>
                      <td>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md"
                          onClick={(event) =>
                            handleDelete(customer.customerId, event)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
