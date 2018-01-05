import React, { Component } from 'react';

//component
import Menu from './component/Menu'
import Home from './page/Home'
import Footer from './component/Footer'



import './css/bootstrap4.min.css'
import './css/style.css';


class App extends Component {





  render() {
    return (
        <div>
            <div className="container-fluid">
                <Menu/>
                <Home/>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
