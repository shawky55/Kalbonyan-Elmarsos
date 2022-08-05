import { useState } from 'react';
import BackDrop from './BackDrop';
import Overlay from './Overlay';

const Todo = (props) => {
  const [contentState, setContentState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function showContentHandler() {
    setContentState((prevState) => !prevState);
  }
  const deleteModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div className="card">
        <h2>{props.header || 'Todo'}</h2>
        {contentState && (
          <div className="content">{props.content || 'empty Todo'}</div>
        )}
        <div className="actions">
          <button className="btn-edit">Edit</button>
          <button className="btn" onClick={deleteModalHandler}>
            Delete
          </button>
          <button className="btn-show" onClick={showContentHandler}>
            show
          </button>
        </div>
      </div>
      {showModal && <BackDrop cancelDelete={deleteModalHandler}></BackDrop>}
      {showModal && <Overlay cancelDelete={deleteModalHandler}></Overlay>}
    </>
  );
};
export default Todo;
