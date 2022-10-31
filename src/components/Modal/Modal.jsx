import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React, { Component } from 'react'

export  class ModalWind extends Component {
componentDidUpdate() { 
  const {largeImg} = this.props
  const savedImages = JSON.parse(localStorage.getItem('imgs'))
  if(savedImages?.includes(largeImg)) return
  largeImg&&localStorage.setItem('imgs',JSON.stringify([...(savedImages??[]),this.props.largeImg]))
 }

  render() {
const { largeImg, onModalClose, isOpen} = this.props

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
}