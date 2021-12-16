import React from "react";
import ChartistGraph from "react-chartist";

// react-bootstrap components
import {
  Dropdown,
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";

function Dashboard() {
  const [showModal, setShowModal] = React.useState(false);
  const [showUser, setShowUser] = React.useState(false);

  return (
    <>
      <Container>
        <h2>Search by:</h2>

        <Form>
          <Row>
            <Col className="pr-1" md="6">
              <Row>
                <Form.Group>
                  <label>Request ID</label>
                  <Form.Control
                    defaultValue="1234"
                    placeholder="Request ID"
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  Search by Request ID
                </Button>
              </Row>
            </Col>
            <Col className="pr-1" md="6">
              <Row>
                <Form.Group>
                  <label>User ID</label>
                  <Form.Control
                    defaultValue="5678"
                    placeholder="User ID"
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  Search by User ID
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
      <hr></hr>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Incoming Requests</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={() => setShowModal(true)}>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Mini Modal */}
        <Modal
          className=" modal-primary"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav navbar>
                <Nav.Item>
                  <Nav.Link onClick={() => setShowUser(false)}>
                    <span className="no-icon">Request Details</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link onClick={() => setShowUser(true)}>
                    <span className="no-icon">User Details</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Modal.Header className="justify-content-center"></Modal.Header>
          <Modal.Body className="text-center">
            <Container className="justify-content-center">
              <Container>
                <Row>
                  {!showUser ? (
                    <Col>
                      <Card>
                        <Card.Header>
                          <Card.Title as="h4">Reaquest Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
                          <Form>
                            <Row>
                              <Col className="pr-1" md="6">
                                <Form.Group>
                                  <label>Request ID</label>
                                  <Form.Control
                                    defaultValue="Creative Code Inc."
                                    disabled
                                    placeholder="Company"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col className="px-1" md="6">
                                <Form.Group>
                                  <label>User ID</label>
                                  <Form.Control
                                    defaultValue="michael23"
                                    placeholder="Username"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col className="pl-1" md="12">
                                <Form.Group>
                                  <label htmlFor="exampleInputEmail1">
                                    Email address
                                  </label>
                                  <Form.Control
                                    placeholder="Email"
                                    type="email"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="pr-1" md="6">
                                <Form.Group>
                                  <label>First Name</label>
                                  <Form.Control
                                    defaultValue="Mike"
                                    placeholder="Company"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col className="pl-1" md="6">
                                <Form.Group>
                                  <label>Last Name</label>
                                  <Form.Control
                                    defaultValue="Andrew"
                                    placeholder="Last Name"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="pr-1" md="3">
                                <Form.Group>
                                  <label>Mine?</label>
                                  <Form.Control
                                    defaultValue="yes"
                                    placeholder="Mine?"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col className="pr-1" md="3">
                                <Form.Group>
                                  <label>Phone call?</label>
                                  <Form.Control
                                    defaultValue="yes"
                                    placeholder="Mine?"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col className="pr-1" md="6">
                                <Form.Group>
                                  <label>Phone Number</label>
                                  <Form.Control
                                    defaultValue="0123456789"
                                    placeholder="Phone Number"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="pr-1" md="4">
                                <Form.Group>
                                  <label>Country</label>
                                  <Form.Control
                                    defaultValue="Malaysia"
                                    placeholder="City"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="12">
                                <Form.Group>
                                  <label>Medical Field</label>
                                  <Form.Control
                                    defaultValue="Dentistry"
                                    placeholder="Medical Field"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="12">
                                <Form.Group>
                                  <label>Medical Problem</label>
                                  <Form.Control
                                    defaultValue="Problem"
                                    placeholder="Medical Problem"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="pr-1" md="6">
                                <Form.Group>
                                  <label>Created At</label>
                                  <Form.Control
                                    defaultValue="11/11/2021 01:01:01"
                                    placeholder="Created At"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                              </Col>

                              <Col className="pr-1" md="6">
                                <Form.Group>
                                  <label>Updated At</label>
                                  <Form.Control
                                    defaultValue="11/11/2021 01:01:01"
                                    placeholder="Updated At"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <hr></hr>
                            <h4>Agent Status</h4>
                            <Row>
                              <Col md="6">
                                <Form.Group>
                                  <label>Status</label>
                                  <Form.Control
                                    defaultValue="abcdefg"
                                    placeholder="Status"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col md="6">
                                <Form.Group>
                                  <label>Created at</label>
                                  <Form.Control
                                    defaultValue="11/11/2021 01:01:01"
                                    placeholder="Created at"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                                <Form.Group>
                                  <label>Agent ID</label>
                                  <Form.Control
                                    defaultValue="123456789"
                                    placeholder="Agent ID"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>{/* Place attachments here*/}</Row>

                            <hr></hr>
                            <h4>Quotation Status</h4>
                            <Row>{/* Place attachment here*/}</Row>
                            <Row>
                              <Col md="6">
                                <Form.Group>
                                  <label>Agent ID</label>
                                  <Form.Control
                                    defaultValue="123456789"
                                    placeholder="Agent ID"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col md="6">
                                <Form.Group>
                                  <label>Created at</label>
                                  <Form.Control
                                    defaultValue="11/11/2021 01:01:01"
                                    placeholder="Created at"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                                <Form.Group>
                                  <label>Title</label>
                                  <Form.Control
                                    defaultValue="quotation title"
                                    placeholder="title"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                              <Col md="6">
                                <Form.Group>
                                  <label>Quotation Status</label>
                                  <Form.Control
                                    defaultValue="quotation status"
                                    placeholder="title"
                                    type="text"
                                  ></Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>

                            <Button
                              className="btn-fill pull-right"
                              type="submit"
                              variant="info"
                            >
                              Update Request
                            </Button>
                            <div className="clearfix"></div>
                          </Form>
                        </Card.Body>
                      </Card>
                    </Col>
                  ) : (
                    <Col>
                      <Card className="card-user">
                        <div className="card-image">
                          <img
                            alt="..."
                            src={
                              require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                                .default
                            }
                          ></img>
                        </div>
                        <Card.Body>
                          <div className="author">
                            <a onClick={(e) => e.preventDefault()}>
                              <img
                                alt="..."
                                className="avatar border-gray"
                                src={
                                  require("assets/img/faces/face-3.jpg").default
                                }
                              ></img>
                              <h4 className="title">Name</h4>
                              <h5 className="title">FirstName LastName</h5>
                            </a>
                            <h6 className="description">Email</h6>
                            <p className="description">123@123.com</p>
                            <h6 className="description">Phone Number</h6>
                            <p className="description">0123456789</p>
                            <h6 className="description">Address</h6>
                            <p className="description">new york, usa</p>
                            <h6 className="description">michael24</h6>
                            <p className="description">michael24</p>
                          </div>
                          <p className="description text-center">
                            "Lamborghini Mercy <br></br>
                            Your chick she so thirsty <br></br>
                            I'm in that two seat Lambo"
                          </p>
                        </Card.Body>
                        <hr></hr>
                      </Card>
                    </Col>
                  )}
                </Row>
              </Container>
            </Container>
          </Modal.Body>
          <div className="modal-footer">
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Back
            </Button>
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
      </Container>
    </>
  );
}

export default Dashboard;
