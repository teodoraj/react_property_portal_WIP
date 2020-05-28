import React from 'react';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './container/Layout'
import Properties from './components/Properties/Properties';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* have here both pages: listings and property page */}
          <h2 className = {classes.Page_title}>Existent listings
             <Button variant="primary" size="lg" style={{float:'right'}}> Add new listing</Button>
          </h2>
          <Properties />

       </Layout>
    </div>
  );
}

export default App;
