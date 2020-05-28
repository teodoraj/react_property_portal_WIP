import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import PropertyPage from './PropertyPage';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router>
    <div>
    {/* Switch component helps us to render the components only when path matches otherwise it fallbacks to the not found component. */}
      <Switch>
          {/*exact property will only match if the path matches the location.pathname exactly */}
          <Route exact path="/" component={App} />
          <Route path="/property/:id" component={PropertyPage} />
          <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)




// ReactDOM.render(routing, document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
   {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
