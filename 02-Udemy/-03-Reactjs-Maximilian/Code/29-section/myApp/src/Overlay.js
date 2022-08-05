const Overlay = (props) => {
//   const cancelHandler = () => {
//     props.cancelDelete(false);
//   };
//   const confirmHandler = () => {
//     props.cancelDelete(false);
//   };
  return (
    <div className="modal">
      <h3>Are you sure </h3>
      <button className="btn btn--alt" onClick={props.cancelDelete}>
        Cancel
      </button>
      <button className="btn" onClick={props.cancelDelete}>
        Confirm
      </button>
    </div>
  );
};

export default Overlay;
