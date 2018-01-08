import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//component
import Menu from './component/Menu'
import Footer from './component/Footer'

//page
import Home from './page/Home'
import Inversion from './page/Inversion'
import Ahorro from './page/Ahorro'
import Iban from './page/Iban'
import Ibanoponion from './page/Ibanopinion'
import Contact from './page/Contact'
import Politica from './page/Politica'
import Termino from './page/Termino'


import './css/bootstrap4.min.css'
import './css/animate.css';

import './css/style.css';

class App extends Component {

  render() {
    return (
        <Router>
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route path="/inversion" component={Inversion}/>
                <Route path="/ahorro" component={Ahorro}/>
                <Route path="/iban" component={Iban}/>
                <Route path="/ibanopinion" component={Ibanoponion}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/politica" component={Politica}/>
                <Route path="/termino" component={Termino}/>
                <Footer/>
            </div>

        </Router>

    );
  }
}

export default App;
