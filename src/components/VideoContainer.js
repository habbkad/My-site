
import {React,useState} from 'react'
import { Container, Ratio, Col, Row } from 'react-bootstrap'
import YouTube1 from './YoutubeVideo.js'

export default function () {
    return (
        <Container style={{marginTop:80,justifyContent:'space-between', marginBottom:30}}>
            <hr/>
            <Row style={{justifyContent:'space-between', marginTop:80}}>
                <Col xs={5} style={{justifyContent:'center'}}>
                    <h3 style={{color:'blue', alignSelf:'center'}}>Hello</h3>
                    Adipisicing velit anim deserunt consectetur est ut adipisicing sint
                    velit dolor. Eu ad velit sit nostrud magna laborum Lorem minim officia do
                    officia sint labore. Velit adipisicing sit est fugiat ad mollit est do aute elit.
                    Tempor nostrud pariatur amet sit id occaecat irure officia id nisi fugiat.
                </Col>
                <Col xs={7} style={{paddingLeft:20}}>
                    <Ratio aspectRatio={1}>

                        <YouTube1 videoCode='w5tWYmIOWGk'/>
                    </Ratio>
                </Col>
            </Row>
        </Container>
    )
}
