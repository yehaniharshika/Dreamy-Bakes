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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

const CustomerPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNum, setContactNum] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="flex overflow-hidden bg-emerald-200">
        <Navigation />
        <div className="flex-1 p-5" style={{ backgroundColor: "#cec4ff" }}>
          <Container fluid>
            <Row className="align-items-center mb-3">
              <Col md={12}>
                <motion.div
                  className="p-3 rounded top-50"
                  style={{ backgroundColor: "#8854d0" }}
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
                          fontFamily: "'Ubuntu', sans-serif",
                          fontWeight: "bold",
                          color: "white",
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
                variant="primary"
                onClick={handleShow}
                className="h-10 max-w-40 font-bold"
                style={{
                  fontFamily: "'Montserrat', serif",
                  fontSize: "15px",
                  fontWeight: "bold",
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
              <Modal.Body style={{ backgroundColor: "#cec4ff" }}>
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
                      onChange={}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      className="font-bold"
                      style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                      Medicine Name
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
                      placeholder="Enter medicine brand"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="dosage_form">
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
                  style={{
                    fontFamily: "'Montserrat', serif",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                  className="font-bold"
                  variant="primary"
                  onClick={}
                >
                  Save
                </Button>
                <Button
                  style={{
                    fontFamily: "'Montserrat', serif",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                  className="font-bold"
                  variant="success"
                  onClick={}
                >
                  Update
                </Button>
                <Button
                  style={{
                    fontFamily: "'Montserrat', serif",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
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
              <div className="overflow-x-auto">
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
                      <th className="px-4 py-2 border">customer ID</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">address</th>
                      <th className="px-4 py-2 border">contact num</th>
                      <th className="px-4 py-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      fontFamily: "'Montserrat', serif",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {medicines.map((medicine) => (
                      <tr
                        key={medicine.medicineId}
                        onClick={() => handleEditMedicine(medicine)}
                        className="hover:bg-blue-100 transition-all"
                      >
                        <td className="px-4 py-2 border">
                          {medicine.medicineId}
                        </td>
                        <td className="px-4 py-2 border">
                          {medicine.medicineName}
                        </td>
                        <td className="px-4 py-2 border">{medicine.brand}</td>
                        <td className="px-4 py-2 border">
                          {medicine.medicineImg ? (
                            <img
                              src={`data:image/jpeg;base64,${medicine.medicineImg}`}
                              alt="Patient Image"
                              className="w-[60px] h-[60px] object-cover rounded-full"
                            />
                          ) : (
                            <span>No Image</span>
                          )}
                        </td>
                        <td className="px-4 py-2 border">
                          {medicine.dosage_form}
                        </td>
                        <td className="px-4 py-2 border">
                          {medicine.unit_price}
                        </td>
                        <td className="px-4 py-2 border">
                          {medicine.quantity_in_stock}
                        </td>
                        <td className="px-4 py-2 border">
                          {medicine.expiry_date}
                        </td>
                        <td className="px-4 py-2 border flex justify-center gap-2 h-[80px]">
                          <button
                            className="bg-red-500 text-white px-3 h-[40px] py-1 rounded-md hover:bg-red-700"
                            onClick={(event) =>
                              handleDeleteMedicine(event, medicine.medicineId)
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
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
