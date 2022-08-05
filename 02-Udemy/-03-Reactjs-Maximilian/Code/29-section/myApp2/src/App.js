import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MeetupsPage from './pages/MeetupsPage';
import MainNavigation from './components/layout/MainNavigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MeetupsPage></MeetupsPage>
        </Route>
        <Route path="/favorites-meetups">
          <Favorites></Favorites>
        </Route>
        <Route path="/new-meetup">
          <NewMeetup></NewMeetup>
        </Route>
        <Route path="*">
          <Redirect to="/"> </Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
