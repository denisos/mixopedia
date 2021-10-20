import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import './App.css';
import MainNav from './components/MainNav';
import PageTitle from './components/PageTitle';
import HeaderBar from './components/HeaderBar';
import LandingBody from './components/LandingBody';

function App() {
  return (
    <div className="app">
      <HeaderBar />
      <div className="header-offset"></div>

      {/* <PageTitle /> */}

      <div className="body-container">
        <Router>
          <div className="router-container">
            <MainNav />

            <Switch>
              <Route exact path="/">
                <LandingBody />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    </div>
  );
}



function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
