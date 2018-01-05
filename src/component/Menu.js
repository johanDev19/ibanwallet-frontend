import React, {Component} from 'react'
import logo from './../img/Logoibanwallet.svg'


class Menu extends Component {
    render(){
        return(
            <header className="d-flex justify-content-between align-items-center page-menu container">
                <figure className="col-md-4">
                    <img src={logo} alt="logo" />
                </figure>
                <nav className="col-md-8 menu">
                    <ul className="d-flex justify-content-end">
                        <a href="/">
                            <li>iBAN</li>
                        </a>
                        <a href="">
                            <li>Planes de Ahorro</li>
                        </a>
                        <a href="/inversion">
                            <li>Inversión</li>
                        </a>
                        <a href="">
                            <li>Acceso Clientes</li>
                        </a>
                        <a href="">
                            <li>Registrate</li>
                        </a>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;