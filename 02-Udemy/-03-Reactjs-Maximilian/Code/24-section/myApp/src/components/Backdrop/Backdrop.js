import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
  const cssClasses = [
    'Backdrop',
    props.show ? 'showBackdrop' : 'closeBackdrop',
  ];

  return (
    <div onClick={props.closeModal} className={cssClasses.join(' ')}></div>
  );
};

export default Backdrop;
