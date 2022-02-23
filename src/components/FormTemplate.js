import {React,useState} from "react";
import { Card, Form ,Button} from "react-bootstrap";

export default function FormTemplate(props) {

    const [details,setDetails]= useState({
        name:'',

    })

    function handleChange(e){
        setDetails({[e.target.name]:e.target.value})
        console.log(details)
    }
    function handleSubmit(e){
        e.preventDefault()
        props.person(details)
    }
    return (
        <>
            <Card
                border="light"
                style={{ padding: 20, marginTop: 100, background: "#f7f7f7" }}
            >
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" name="name" onChange={handleChange}/>
                        <br />
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" />
                        <br />
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" />
                        <br />
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" />
                        <br />
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" />
                        <br />
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="full name" />
                        <br />
                        <Button variant="primary" type="submit">Primary</Button>
                    </Form.Group>
                </Form>
            </Card>
        </>
    );
}
