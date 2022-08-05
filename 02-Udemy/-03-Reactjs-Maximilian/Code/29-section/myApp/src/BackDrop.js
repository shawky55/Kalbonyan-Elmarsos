const BackDrop = (props) => {
  //   const cancelHandler = () => {
  //     props.showModal(false);
  //   };
  return <div className="backdrop" onClick={props.cancelDelete}></div>;
};
export default BackDrop;
