import React, { Component } from 'react';

//component
import Menu from './component/Menu'
import Home from './page/Home'

import './css/bootstrap4.min.css'
import './css/style.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu/>
        <Home/>
      </div>
    );
  }
}

export default App;
