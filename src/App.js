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
import Cookie from './page/Cookie'


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
                <Route path="/planes-de-ahorro" component={Ahorro}/>
                <Route path="/conoce-iban" component={Iban}/>
                <Route path="/opiniones-sobre-iban" component={Ibanoponion}/>
                <Route path="/contacto" component={Contact}/>
                <Route path="/politica" component={Politica}/>
                <Route path="/terminos" component={Termino}/>
                <Route path="/cookies" component={Cookie}/>
                <Footer/>
            </div>

        </Router>

    );
  }
}

export default App;
