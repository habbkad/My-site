import React from "react";
import { Container, Col, Row, Image, Form } from "react-bootstrap";
import image from '../assets/image.jpg'
import FormTemplate from "./FormTemplate";





export default function FormInput(props) {
  return (
      <>
       <Image src={image} 
           style={{ height:300,width:'100%'}}
           fluid={true}
          />
      <Container>
          <Row>
              <Col>
             <FormTemplate person={props.person} />
              </Col>
          </Row>
    </Container>
      </>
    
  );
}
