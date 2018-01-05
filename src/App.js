import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//component
import Menu from './component/Menu'
import Footer from './component/Footer'

//page
import Home from './page/Home'
import Inversion from './page/Inversion'


import './css/bootstrap4.min.css'
import './css/style.css';


class App extends Component {

  render() {
    return (
        <Router>
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/inversion" component={Inversion}/>
                <Footer/>
            </div>

        </Router>

    );
  }
}

export default App;
