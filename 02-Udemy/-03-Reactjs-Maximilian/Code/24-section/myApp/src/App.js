import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  showBlock = () => {
    this.setState((prev) => ({ showBlock: !prev.showBlock }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={this.showBlock}>toggle</button>
        <br />

        <Transition
          in={this.state.showBlock}
          timeout={400}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('on Enter')}
          onEntering={() => console.log('on Entering')}
          onEntered={() => console.log('on Entered')}
          onExit={() => console.log('on Exit')}
          onExiting={() => console.log('on Exiting')}
          onExited={() => console.log('on Exited')}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: 'teal',
                borderRadius: '8px',
                width: 150,
                height: 80,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exited' ? 0 : 1,
                color: 'white',
                padding: '10px',
              }}
            >
              Hello World!
            </div>
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        {this.state.modalIsOpen && (
          <Backdrop
            show={this.state.modalIsOpen}
            closeModal={this.closeModal}
          />
        )}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
