import React, {Component} from 'react'
import logo from './../img/Logoibanwallet.svg'

class Footer extends Component {
    render(){
        return(
            <footer className="d-flex justify-content-center align-items-center flex-column">
                <div className="row container-fluid d-flex justify-content-between">
                    <div className="fo-1">
                        <div className="d-flex flex-column">
                            <span className="font-weight-bold">
                                <figure>
                                    <img src={logo} alt="logo"/>
                                </figure>
                            </span>
                            <span>® iBAN Wallet 2018</span>
                            <ul className="d-flex">
                                <a href="">
                                    <li><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                </a>
                                <a href="">
                                    <li><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                                </a>
                                <a href="">
                                    <li><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                                </a>
                            </ul>
                        </div>

                    </div>
                    <div className="fo-2 d-flex flex-column">
                        <span className="font-weight-bold">Producto</span>
                        <span>Planes de Ahorro</span>
                        <span>Inversion</span>
                    </div>
                    <div className="fo-2 d-flex flex-column">
                        <span className="font-weight-bold">Información</span>
                        <span><a href="/ibanopinion">Opiniones iBAN</a></span>
                        <span><a href="/contact">Contacto</a></span>
                    </div>
                </div>
                <div className="container-fluid">
                    <p>
                        iBAN Investment Group S.L, Paseo de las Delicias, 1, 41001, Sevilla, Agente de Esfera Capital, Agencia de valores sujeta a supervisión de la CNMV inscrito con el número 252. Agente de de Seguros Exclusivo de Caser (Caja de Seguros Reunidos, Compañia de Seguros y reaseguros, S.A.= sujeto a la supervisión de la DGSFP inscrito con el número C0031B90344383. Los planes de ahorro están gestionados por Caser y depositado en CecaBank.
                    </p>
                    <ul className="d-flex justify-content-center ">
                        <a href="">
                            <li>Politica de privacidad - </li>
                        </a>
                        <a href="">
                            <li>Terminos y condiciones de uso - </li>
                        </a>
                        <a href="">
                            <li>Politica de cookies</li>
                        </a>
                    </ul>
                </div>
            </footer>

        )
    }
}

export default Footer