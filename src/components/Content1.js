import React from 'react'
import Image from 'react-bootstrap/Image'
import image from '../assets/image.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Content1() {
    return (
      
            <Container style={{  marginTop:10, marginBottom:10}}>
                <Row>
                    <Col> <Image
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                        roundedCircle={true}   
                        style={{}}                    
                    />
                    </Col>
                    <Col>
                    <h1>hello</h1>
                    </Col>
                </Row>

            </Container>

          





    )
}
