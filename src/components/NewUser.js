import React from "react";
import {Card, Col, Container, Row} from 'react-bootstrap'

export default function NewUser(props) {
    const newUser=props.details
   
  return (
    <>
   
        <Col>
        <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{newUser}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
        </Col>
     
    </>
  );
}
