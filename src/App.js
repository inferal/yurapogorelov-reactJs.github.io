import React, { Component } from 'react';

import Header from './views/Header';
import Footer from './views/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="main">
          <Header/>
          <Footer/>
      </div>
    );
  }
}

export default App;
