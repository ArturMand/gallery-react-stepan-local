import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

const instanceAxios = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/random/',
});

export class List extends Component {
  state = {
    items: [],
  };

  getItems = async () => {
    const {
      data: { message: items },
    } = await instanceAxios.get(`${this.props.value}`);
    console.log(items);
    this.setState(prevState => ({ items: [...prevState.items, ...items] }));
  };

  componentDidMount() {
    this.getItems();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.getItems();
    }
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
                <Button
                  variant="primary"
                  onClick={() => this.props.onModalOpen(item)}
                >
                  Відкрити модалку
                </Button>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
