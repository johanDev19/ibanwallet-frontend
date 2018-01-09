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
                <nav class="navbar navbar-expand-lg page-menu bg-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="150" height="" class="d-inline-block align-top" alt="" />

                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/iban">iBAN <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ahorro">Planes de Ahorro</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inversion">Inversión</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/https://secure.myibanwallet.com">Acceso Clientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/https://secure.myibanwallet.com">Registrate</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Menu;