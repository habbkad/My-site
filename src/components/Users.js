import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import NewUser from "./NewUser";

export default function Users(props) {
  console.log(props.userDetails);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Row>
            {props.userDetails.map((user) => (
              <NewUser details={user.name} />
            ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
