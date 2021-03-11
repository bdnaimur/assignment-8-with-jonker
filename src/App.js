import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClubDetails from './components/ClubDetails/ClubDetails';
import Header from './components/Header/Header';

function App() {
  library.add(fab, faCheckSquare, faCoffee);
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/clubDetails/:clubKey">
          <ClubDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
