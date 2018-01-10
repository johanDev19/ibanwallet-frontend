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
            <header className={this.state.shadow === true?'shadow':''}>
                {/*<figure className="col">*/}
                    {/*<a href="/">*/}
                        {/*<img src={logo} alt="logo" />*/}
                    {/*</a>*/}
                {/*</figure>*/}
                <nav className="navbar navbar-expand-lg page-menu bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width="150" height="" className="d-inline-block align-top" alt="" />

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>

                    <div className="collapse navbar-collapse m-md-5 m-lg-5 m-sm-1" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/conoce-iban">iBAN <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/planes-de-ahorro">Planes de Ahorro</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/inversion">Inversión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://secure.myibanwallet.com">Acceso Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://secure.myibanwallet.com">Regístrate</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Menu;
