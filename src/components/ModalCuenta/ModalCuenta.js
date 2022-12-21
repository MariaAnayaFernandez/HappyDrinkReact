
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import './ModalCuenta.scss'


function ModalCuenta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
      <ReceiptLongIcon></ReceiptLongIcon>0
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tu cuenta es:</Modal.Title>
        </Modal.Header>
        <Modal.Body >Aún no agregas Happy Drinks a tu cuenta!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCuenta;