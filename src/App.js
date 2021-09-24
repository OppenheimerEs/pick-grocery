import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Offer from './pages/Offer'
import Help from './pages/Help'
import Error from './pages/Error'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Route exact path='/offer'>
          <Offer />
        </Route>
        <Route exact path='/help'>
          <Help />
        </Route>
        <Route path='*'>
          <Error />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
