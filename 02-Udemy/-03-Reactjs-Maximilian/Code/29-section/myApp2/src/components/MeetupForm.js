import React from 'react';
import classes from './MeetupForm.module.css';
import { useRef } from 'react';
function MeetupForm(props) {
  const title = useRef();
  const address = useRef();
  const description = useRef();
  const imageUrl = useRef();
  const resetForm = () => {
    title.current.value = '';
    description.current.value = '';
    imageUrl.current.value = '';
    address.current.value = '';
  };
  const cancelForm = () => {
    resetForm();
  };
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    const titleValue = title.current.value;
    const addressValue = address.current.value;
    const descriptionValue = description.current.value;
    const imageValue = imageUrl.current.value;
    if (!titleValue || !addressValue || !descriptionValue || !imageValue) {
      console.log("thre empty input")
      return;
    }
    const newMeetup = {
      title: titleValue,
      description: descriptionValue,
      image: imageValue,
      address: addressValue,
    };
    props.newMeetup(newMeetup);
    resetForm();
  };
  return (
    <form onSubmit={onSubmitFormHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" min={2} ref={title}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="imgae">Image</label>
        <input id="image" type="url" min="2" ref={imageUrl}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" min="2" ref={address}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">description</label>
        <textarea
          rows="4"
          id="description"
          type="text"
          min="10"
          ref={description}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>add Meetup</button>
        <button type="button" onClick={cancelForm}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default MeetupForm;
