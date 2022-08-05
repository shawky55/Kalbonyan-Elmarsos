import { useContext } from 'react';
import MeetupList from '../components/MeetupList';
import FavContext from '../store/FavContext';
function Favorites(props) {
  const favCtx = useContext(FavContext);
  let meetupList;
  if (favCtx.totalFavorites === 0) {
    meetupList = <p> Start adding some Favorites</p>;
  } else {
    meetupList = <MeetupList meetupsData={favCtx.favorites}></MeetupList>;
  }

  return (
    <div>
      <h2>Favorites</h2>
      {meetupList}
    </div>
  );
}

export default Favorites;
