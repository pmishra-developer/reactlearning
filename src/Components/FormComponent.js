import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";

export default function FormComponent() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br />
        <Row className="mx-0">
          <Button as={Col} variant="primary">
            Button #1
          </Button>
          <Button as={Col} variant="secondary" className="mx-2">
            Button #2
          </Button>
          <Button as={Col} variant="success">
            Button #3
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
