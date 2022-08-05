import React from 'react';
import  CSSTransition  from 'react-transition-group/CSSTransition';
import './Modal.css';
const animmationTiming = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  // const cssClasses = [
  //   'Modal',
  //   props.show === 'entering'
  //     ? 'showModal'
  //     : props.show === 'exiting'
  //     ? 'closeModal'
  //     : null,
  // ];

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animmationTiming}
      classNames={{
        enter: '',
        enterActive: 'showModal',
        exit: '',
        exitActive: 'closeModal',
      }}
    >
      {(state) => {
        console.log(state);
        // const cssClasses = [
        //   'Modal',
        //   state === 'entering'
        //     ? 'showModal'
        //     : state === 'exiting'
        //     ? 'closeModal'
        //     : null,
        // ];
        return (
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </CSSTransition>
  );
};

export default modal;

//   {(state) => {
//     return <Modal show={state} closed={this.closeModal} />;
//   }}
// </Transition>;
