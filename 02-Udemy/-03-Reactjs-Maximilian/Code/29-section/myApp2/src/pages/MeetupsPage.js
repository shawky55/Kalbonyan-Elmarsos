import React, { useEffect, useState } from 'react';
// import MeetupItem from '../components/MeetupItem';
import MeetupList from '../components/MeetupList';
const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];
function MeetupsPage(props) {
  const [NewMeetups, setNewMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getResponse = async () => {
      const meetups = [];
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://s29meetupapp-default-rtdb.firebaseio.com/meetups.json'
        );
        const data = await res.json();
        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
          setNewMeetups(meetups);
        }
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };
    getResponse();
  }, []);

  if (isLoading) {
    return <h3>is Loading ....</h3>;
  }
  return <MeetupList meetupsData={NewMeetups} />;

  //   {DUMMY_DATA.map((meetupData) => {
  //     return (
  //       <MeetupItem
  //         title={meetupData.title}
  //         img={meetupData.image}
  //         address={meetupData.address}
  //         description={meetupData.description}
  //         key={meetupData.id}
  //       ></MeetupItem>
  //     );
  //   })}
  //   {DUMMY_DATA.map((meetupData,index) => {
  //     return <li key={meetupData.id}>{JSON.stringify(meetupData)}</li>;
  //   })}
}

export default MeetupsPage;
