import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function ServicesModalLayout() {
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                View More
            </Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Available Services</Modal.Title>
                </Modal.Header>
                <Modal.Body>Some services...</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ServicesModalLayout;
