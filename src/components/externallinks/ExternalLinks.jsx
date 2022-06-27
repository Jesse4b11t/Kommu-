import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ExternalLinks() {
    return (
        <div className='flex flex-col flex-center card-header' style={{ padding: "1.5rem" }}><h4>External Links </h4>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Facebook</Form.Label>
                <Form.Control type="text" placeholder="Facebook" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Twitter</Form.Label>
                <Form.Control type="text" placeholder="Twitter" />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Instagram</Form.Label>
                <Form.Control type="text" placeholder="Instagram" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Tiktok</Form.Label>
                <Form.Control type="text" placeholder="Tiktok" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
            
        </Form>
        </div>
    );
}

export default ExternalLinks;
