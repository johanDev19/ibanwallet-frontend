import React, {Component} from 'react'
import logo from './../img/Logoibanwallet.svg'


class Menu extends Component {
    render(){
        return(
            <header className="d-flex justify-content-between align-items-center page-menu container-fluid">
                <figure className="col-2">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </figure>
                <nav className="col-md col-lg col-sm-1 menu hidden-lg-down">
                    <i className="fa fa-bars d-md-none d-lg-none d-sm-block" aria-hidden="true"></i>
                    <ul className="justify-content-end d-none d-md-flex">
                        <a href="/iban">
                            <li>iBAN</li>
                        </a>
                        <a href="/ahorro">
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