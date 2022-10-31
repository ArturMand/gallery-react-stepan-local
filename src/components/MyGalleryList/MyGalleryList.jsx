import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Card } from 'react-bootstrap';

export class MyGalleryList extends Component {
  state = {
    items: [],
  };

  getItems = async () => {
    const listSavedImages = JSON.parse(localStorage.getItem('imgs'));
    listSavedImages && this.setState({ items: listSavedImages });
  };

  componentDidUpdate() {
    this.getItems();
  }

  render() {
    const { items } = this.state;

    return (
      <ListGroup>
        {items.map(item => {
          return (
            <ListGroup.Item key={item}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item} />
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
