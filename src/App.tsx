import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import './App.css';
import MainNav from './layout/MainNav';
// import PageTitle from './layout/PageTitle';
import HeaderBar from './layout/HeaderBar';
import LandingBody from './components/landing/LandingBody';
import Dashboard from './components/Dashboard';
import SchemParser from './components/schemaparser/SchemaParser';
import ContextExample from './components/contextexample/ContextExample';
import Patterns from './components/patterns/Patterns';
import Fetchin from './components/fetchexamples/Fetchin';
import TaskList from './components/tasklist/TaskList';
import About from './components/about/About';
import Forms from './components/forms/Forms';

const PokemonPowerRankings = React.lazy(() =>
  import(/* webpackChunkName: "PokemonPowerRankings" */ './components/pokemon/PokemonPowerRankings'));


function App() {
  return (
    <div className="app">
      <HeaderBar />
      <div className="header-offset"></div>

      {/* <PageTitle /> */}

      <div className="content-container">
        <React.Suspense fallback={<div>Loading…</div>}>
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
                <Route path="/schemaparser">
                  <SchemParser />
                </Route>

                <Route path="/pokemon">
                  <PokemonPowerRankings />
                </Route>

                <Route path="/context">
                  <ContextExample />
                </Route>

                <Route path="/patterns">
                  <Patterns />
                </Route>

                <Route path="/useEffect">
                  <Fetchin />
                </Route>

                <Route path="/tasklist">
                  <TaskList />
                </Route>

                <Route path="/formcontrols">
                  <Forms />
                </Route>

                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </Router>
        </React.Suspense>
      </div>
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
