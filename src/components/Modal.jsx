import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalDialog = (props) => {
  const { name, info } = props.band;
  return (
    <Modal size="xl" show={props.show} onHide={props.handleClose}>
      <Modal.Header className="bg-dark text-light" closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{info}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDialog;
