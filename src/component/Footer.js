import React, {Component} from 'react'
import logo from './../img/Logoibanwallet.svg'

class Footer extends Component {
    render(){
        return(
            <footer className="d-flex justify-content-center align-items-center flex-column">
                <div className="row container d-flex justify-content-start">
                    <div className="fo-1">
                        <div className="d-flex flex-column">
                            <span className="font-weight-bold logo">
                                <figure>
                                    <img src={logo} alt="logo"/>
                                </figure>
                            </span>
                            <span className="r">® iBAN Wallet 2018</span>
                            <ul className="d-flex l-social">
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </ul>
                        </div>

                    </div>
                    <div className="row">
                        <div className="d-flex flex-column f-nav f-nav_1 col">
                            <span className="font-weight-bold">Producto</span>
                            <span><a href="ahorro">Planes de Ahorro</a></span>
                            <span><a href="inversion">Inversion</a></span>
                        </div>
                        <div className="d-flex flex-column f-nav col">
                            <span className="font-weight-bold">Información</span>
                            <span><a href="/ibanopinion">Opiniones</a></span>
                            <span><a href="/iban">iBAN</a></span>
                            <span><a href="/contact">Contacto</a></span>
                        </div>
                    </div>

                </div>
                <div className="container f-2">
                    <ul className="d-flex justify-content-start">
                        <a href="">
                            <li>Politica de privacidad | </li>
                        </a>
                        <a href="">
                            <li> Terminos y condiciones de uso | </li>
                        </a>
                        <a href="">
                            <li> Politica de cookies</li>
                        </a>
                    </ul>
                    <p>
                        iBAN Investment Group S.L, Paseo de las Delicias, 1, 41001, Sevilla, Agente de Esfera Capital, Agencia de valores sujeta a supervisión de la CNMV inscrito con el número 252. Agente de de Seguros Exclusivo de Caser (Caja de Seguros Reunidos, Compañia de Seguros y reaseguros, S.A.= sujeto a la supervisión de la DGSFP inscrito con el número C0031B90344383. Los planes de ahorro están gestionados por Caser y depositado en CecaBank.
                    </p>
                </div>
            </footer>

        )
    }
}

export default Footer