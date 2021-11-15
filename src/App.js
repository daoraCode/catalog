import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import Home from './views/Home';
import Movies from './views/Movie';
import Movie from './views/Movies';
import Error404 from './views/Error404';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (

      <BrowserRouter> 
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/movie">Movie</Link></li>
            </ul>
          </nav>

          <Switch>
            <Nav />
            <Route exact path="/" component={Movies} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;