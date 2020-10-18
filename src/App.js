import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavHeader from './components/navHeader/NavHeader';
import AnimationsContainer from './containers/animationsContainer/AnimationsContainer';
import GridsContainer from './containers/gridsContainer/GridsContainer'
import HomePage from './containers/homePage/HomePage'

function App() {
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/grids" component={GridsContainer} />
        <Route exact path="/animations" component={AnimationsContainer} />

      </Switch>

    </Router>
    // <>
    //   <GridsContainer />
    // </>
  );
}

export default App;
