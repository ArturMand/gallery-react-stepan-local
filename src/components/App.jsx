import { Component } from 'react';
import { List } from './List/List';
import { ModalWind } from './Modal/Modal';
import { MyGalleryList } from './MyGalleryList/MyGalleryList';
import { Select } from './Selecet/Select';

export class App extends Component {
  state = {
    value: '2',
    isOpen: false,
    latrgeImg: '',
  };

  handleSelect = value => {
    this.setState({ value });
  };

  handleModalOpen = src => {
    this.setState({ isOpen: true, latrgeImg: src });
  };

  handleModalClose = () => {
    this.setState({ isOpen: false, latrgeImg: '' });
  };

  render() {
    const { isOpen, value, latrgeImg } = this.state;
    const { handleSelect } = this;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: '10px',
        }}
      >
        <Select handleSelect={handleSelect} />
        <List value={value} onModalOpen={this.handleModalOpen} />
        <ModalWind
          onModalClose={this.handleModalClose}
          largeImg={latrgeImg}
          isOpen={isOpen}
        />
        <h1>Local gallery</h1>
        <MyGalleryList/>
      </div>
    );
  }
}
