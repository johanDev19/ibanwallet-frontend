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
                                    <a href="/">
                                    <img src={logo} alt="logo"/>
                                    </a>
                                </figure>
                            </span>
                            <span className="r">® iBAN Wallet 2018</span>
                            <ul className="d-flex l-social">
                                <a href="https://www.facebook.com/myibanwallet" >
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="https://twitter.com/myibanwallet">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/11428519/">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.instagram.com/myibanwallet/">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </ul>
                        </div>

                    </div>
                    <div className="row fo-2">
                        <div className="d-flex flex-column f-nav f-nav_1 col">
                            <span className="font-weight-bold">Producto</span>
                            <span><a href="planes-de-ahorro">Planes de Ahorro</a></span>
                        </div>
                        <div className="d-flex flex-column f-nav col">
                            <span className="font-weight-bold">Información</span>
                            <span><a href="/opiniones-sobre-iban">Opiniones</a></span>
                            <span><a href="/conoce-iban">iBAN</a></span>
                            <span><a href="/contacto">Contacto</a></span>
                        </div>
                    </div>

                    <div className="fo-2_m col-12 m_f_m">
                        <div className="dropdown show">
                            <a className="btn btn-secondary dropdown-toggle text-uppercase" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Producto
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="/planes-de-ahorro">Planes de Ahorro</a>
                            </div>
                        </div>
                    </div>
                    <div className="fo-2_m col-12 m_f_m">
                        <div className="dropdown show">
                            <a className="btn btn-secondary dropdown-toggle text-uppercase" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Información
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="/opiniones-sobre-iban">Opiniones</a>
                                <a className="dropdown-item" href="/conoce-iban">iban</a>
                                <a className="dropdown-item" href="/contacto">Contacto</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container f-2">
                    <ul className="d-flex justify-content-start flex-wrap">
                        <a href="/politica">
                            <li>Política de privacidad | </li>
                        </a>
                        <a href="/terminos">
                            <li> Términos y condiciones de uso | </li>
                        </a>
                        <a href="/cookies">
                            <li> Política de cookies</li>
                        </a>
                    </ul>
                    <p>
                        iBAN Investment Group S.L., Paseo de las Delicias, 1, 41001, Sevilla, Agente de Esfera Capital, Agencia de valores sujeta a supervisión de la <a href="http://www.cnmv.es/Portal/Consultas/ESI/ESIS.aspx?nif=A04791943&id=660730&vista=19&fs=" >CNMV</a> inscrito con el número 252. Agente de de Seguros Exclusivo de Caser (Caja de Seguros Reunidos, Compañia de Seguros y reaseguros, S.A.) sujeto a la supervisión de la DGSFP inscrito con el número C0031B90344383. Los planes de ahorro están gestionados por Caser y depositado en CecaBank.
                    </p>
                </div>
            </footer>

        )
    }
}

export default Footer
