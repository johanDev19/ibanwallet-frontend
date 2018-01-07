import React, {Component} from 'react'
import logo from './../img/Logoibanwallet.svg'


class Menu extends Component {
    render(){
        return(
            <header className="d-flex justify-content-between align-items-center page-menu container-fluid">
                <figure className="col-md-4">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </figure>
                <nav className="col-md-8 menu ">
                    <ul className="d-flex justify-content-end">
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