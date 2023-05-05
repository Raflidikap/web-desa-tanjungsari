import React from "react"
import { Modal, Button } from "react-bootstrap"
const Modals = (p) =>{
    return(
        <Modal centered dialogClassName="modal-90w" show={p.show} onHide={p.handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{p.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {p.data.body}
                </Modal.Body>
                <Modal.Footer>
                    <p>{p.data.author}</p>
                    <Button variant="secondary" onClick={p.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default Modals