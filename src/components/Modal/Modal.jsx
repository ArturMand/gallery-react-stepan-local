import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ModalWind({ largeImg, onModalClose, isOpen }) {
  return (
    <Modal show={isOpen} onHide={onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ width: 'auto' }}>
          <Card.Img variant="top" src={largeImg} />
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
