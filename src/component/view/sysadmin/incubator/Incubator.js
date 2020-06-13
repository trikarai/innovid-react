import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";

import axios from "axios";
import { Form } from "react-bootstrap";

export default class Incubator extends Component {
  constructor(props) {
    super(props);
    let credentials = JSON.parse(localStorage.getItem("User")).credentials;

    this.state = {
      data: { total: 0, list: [] },
      token: credentials.token,
      isLoading: false,
      isLoadingForm: false,
      isError: false,
      isErrorForm: false,
      errorMessage: "",
      show: false,
      name: "",
      identifier: "",
      personnelName: "",
      personnelEmail: "",
      personnelPhone: "",
      personnelPassword: ""
    };

    axios.defaults.headers.common["Authorization"] =
      "Bearer " + this.state.token;

    this.getDataIncubator = this.getDataIncubator.bind(this);
    this.handlingSuccess = this.handlingSuccess.bind(this);
    this.handlingError = this.handlingError.bind(this);
    this.handlingErrorForm = this.handlingErrorForm.bind(this);
    this.setShow = this.setShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitIncubator = this.submitIncubator.bind(this);
  }

  getDataIncubator() {
    this.setState({
      isLoading: true
    });

    axios
      .get("http://localhost/bara-inovasi/public/api/sys-admin/incubators")
      .then(res => {
        this.handlingSuccess(res);
      })
      .catch(error => {
        if (error.response) {
          this.handlingError(error);
        }
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidUpdate() {}
  componentDidMount() {
    this.getDataIncubator();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }
  handlingSuccess(res) {
    this.setState({
      data: res.data.data
    });
  }
  handlingError(error) {
    this.setState({
      errorMessage: error.response.data.meta.error_detail,
      isError: true,
      isLoading: false
    });
  }
  handlingErrorForm(error) {
    this.setState({
      errorMessage: error.response.data.meta.error_detail,
      isErrorForm: true,
      isLoadingForm: false
    });
  }
  setShow(data) {
    this.setState({
      show: data
    });
  }
  submitIncubator(event) {
    this.setState({
      isLoadingForm: true,
      isErrorForm: false
    });
    const {
      name,
      identifier,
      personnelName,
      personnelEmail,
      personnelPhone,
      personnelPassword
    } = this.state;
    axios
      .post("http://localhost/bara-inovasi/public/api/sys-admin/incubators", {
        name: name,
        identifier: identifier,
        personnelName: personnelName,
        personnelEmail: personnelEmail,
        personnelPhone: personnelPhone,
        personnelPassword: personnelPassword
      })
      .then(res => {
        this.setState({
          show: false
        });
        this.getDataIncubator();
      })
      .catch(error => {
        if (error.response) {
          this.handlingErrorForm(error);
        }
      })
      .finally(() => {
        this.setState({
          isLoadingForm: false
        });
      });
    event.preventDefault();
  }

  render() {
    const { data, isLoading, show } = this.state;

    if (isLoading)
      return (
        <Container>
          <Row className="justify-content-md-center mt-3">
            {" "}
            <Col md="6" className="text-center">
              Loading...
            </Col>
          </Row>
        </Container>
      );
    return (
      <Container>
        <Collapse in={this.state.isError}>
          <Row className="justify-content-md-center mt-3">
            <Col md="6" className="text-center">
              <Alert show={this.state.isError} variant="danger">
                {this.state.errorMessage}
              </Alert>
            </Col>
          </Row>
        </Collapse>
        <Row>
          <Col className="mt-3 mb-3">
            <Button onClick={() => this.setShow(true)}>Add Incubator</Button>
          </Col>
          <Col md="12" lg="12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Incubator Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.list.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <Button>Suspend</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Modal
          centered
          backdrop="static"
          show={show}
          onHide={() => this.setShow(false)}
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Add Incubator
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert show={this.state.isErrorForm} variant="danger">
              {this.state.errorMessage}
            </Alert>
          </Modal.Body>
          <Modal.Body>
            <Form onSubmit={this.submitIncubator}>
              <Form.Group>
                <Form.Control
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  type="text"
                  placeholder="Enter Name"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="identifier"
                  onChange={this.handleChange}
                  value={this.state.identifier}
                  type="text"
                  placeholder="Enter Identifier"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="personnelName"
                  onChange={this.handleChange}
                  value={this.state.personnelName}
                  type="text"
                  placeholder="Personnel Name"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="personnelPhone"
                  onChange={this.handleChange}
                  value={this.state.personnelPhone}
                  type="text"
                  placeholder="Personnel Phone"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="personnelEmail"
                  onChange={this.handleChange}
                  value={this.state.personnelEmail}
                  type="email"
                  placeholder="Personnel Email"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="personnelPassword"
                  onChange={this.handleChange}
                  value={this.state.personnelPassword}
                  type="password"
                  placeholder="Personnel Password"
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                className="mb-3"
                disabled={this.state.isLoadingForm}
                type="submit"
              >
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}
