import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import React from 'react';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetupsData.map((meetupData) => (
        <MeetupItem
          key={meetupData.id}
          id={meetupData.id}
          title={meetupData.title}
          image={meetupData.image}
          address={meetupData.address}
          description={meetupData.description}
        ></MeetupItem>
      ))}
    </ul>
  );
}

export default MeetupList;
