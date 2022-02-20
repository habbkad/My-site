import React from 'react'
import Image from 'react-bootstrap/Image'
import image from '../assets/image.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Content1() {
    return (

        <Container style={{ marginTop: 150, marginBottom: 10 }}><Card>
            <Card.Body> <Row>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>hello</h1>

            </Row>
                <Row style={{ marginTop: 50 }}>

                    <Col sm={4} style={{display:'flex', justifyItems: 'center' }}>
                        <Image
                            src={image}
                            alt="First slide"
                            style={{ backgroundColor: "grey" ,height:300,width:300,
                             borderRadius:150, marginLeft:30, marginBottom:20}}

                        />
                    </Col>

                    <Col sm={8} style={{
                        display: 'flex', justifyItems: 'center', paddingLeft: 40,
                        paddingRight: 40,
                        marginTop: 20,
                        borderWidth:3,
                        borderColor:'black',
                        borderRadius:4
                    }}>
                        <Row >
                            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Title</h1>
                            <p>
                                Ex ex deserunt aute reprehenderit. Nostrud ut proident tempor quis c
                                ulpa aute tempor consequat reprehenderit incididunt aute labore. Excepteur deserunt
                                duis esse adipisicing et voluptate eu cillum excepteur dolore eiusmod sint nostrud magna.
                                Lorem deserunt adipisicing nostrud non Lorem laborum irure quis laboris. Ipsum eu ipsum do et excepteur.
                                Minim ipsum exercitation ullamco velit amet aliquip consectetur. Et irure enim ut cupidatat consequat exercitation.
                            </p>
                        </Row>

                    </Col>
                </Row></Card.Body>
        </Card>


        </Container>







    )
}


