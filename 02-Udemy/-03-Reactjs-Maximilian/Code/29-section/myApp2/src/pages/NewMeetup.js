import React from 'react';
import { useHistory } from 'react-router-dom';
import MeetupForm from '../components/MeetupForm';
import Card from '../components/ui/Card';

function NewMeetup(props) {
  const history = useHistory();
  const sendRequest = async (data) => {
    try {
      const response = await fetch(
        'https://s29meetupapp-default-rtdb.firebaseio.com/meetups.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log('response is ok');
        history.push('/');

        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card>
      <MeetupForm newMeetup={sendRequest}></MeetupForm>
    </Card>
  );
}

export default NewMeetup;
