import React, {Component} from 'react'
import logo from './../img/Logoibanwallet.svg'


class Menu extends Component {
    constructor(){
        super()

        this.state = {
            shadow: false
        }

        this.getScroll = this.getScroll.bind(this)
        this.getScroll();

    }

    getScroll(){

        window.addEventListener("scroll", () => {
            this.setState({
                shadow: window.pageYOffset > 0
            })

            // console.log(window.pageYOffset)
        });

    }



    render(){
        return(
            <header className={this.state.shadow === true?'d-flex justify-content-between align-items-center page-menu container-fluid shadow':'d-flex justify-content-between align-items-center page-menu container-fluid'}>
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
                        <a href="https://secure.myibanwallet.com">
                            <li>Acceso Clientes</li>
                        </a>
                        <a href="https://secure.myibanwallet.com">
                            <li>Registrate</li>
                        </a>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;