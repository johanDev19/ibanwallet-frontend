import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import {
  Link
} from 'react-router-dom'

import icon1 from './../img/web_iban_imagen2.jpg'
import icon2 from './../img/web_iban_imagen1.jpg'



class Iban extends Component {
    render(){
        return(
            <div className="iban container-fluid">
                <Helmet
                    title={"iBAN Wallet - Conoce iBAN"}
                    meta={[
                        { name: 'description', content: "Con iBAN Wallet un mundo más allá de la banca, infórmate en nuestra web y ¡abre tu perfil hoy!" },
                    ]}
                />
                <h1 className="text-center container">
                    Somos la alternativa <span>a la banca</span>
                </h1>
                <section className="iban-1-section container d-md-flex d-lg-flex d-sm-flex justify-content-around align-items-center flex-sm-column">
                    <div className="row">
                        <div className="iban-1-section_text col-md-6 d-none d-ms-block d-md-block d-lg-block">
                            <p>
                                El cliente es el centro para iBAN, le aportamos soluciones de ahorro y estrategias de inversión.
                            </p>
                            <p>
                                Los productos de inversión son sólo un medio para conseguirlo, por ello seleccionamos aquellos que cumplan con lo que nuestros clientes necesitan, siempre desde la más absoluta independencia.
                            </p>
                        </div>
                        <figure className="col-md-6">
                            <img src={icon1} alt=""/>
                        </figure>
                        <div className="iban-1-section_text col-md-6 d-lg-none d-md-none d-ms-block">
                            <p>
                                Nos enfocamos en resolver problemas, en vez de vender productos.
                                Queremos hacer un mundo mejor y cambiar la vida de la gente a traves de iBAN.
                            </p>
                        </div>

                    </div>

                </section>

                <section className="iban-2-section d-flex justify-content-around align-items-center flex-md-row-reverse flex-sm-column container ">
                    <div className="iban-2-section_text col-md-6 d-none d-ms-block d-md-block d-lg-block">
                        <p>
                            Estamos aquí para aquellos que se niegan a conformarse. Quienes nunca dejan de avanzar. Quienes continúan buscando nuevas ideas y mejores experiencias en todo lo que hacen.
                        </p>
                        <p>Porque el mundo tan conectado de hoy merece un compañero financiero igual de avanzado. Uno que se adapta a tus necesidades, te da el control y que continuamente te lleva a nuevos y estimulantes horizontes.</p>
                    </div>
                    <figure className="col-md-6">
                        <img src={icon2} alt=""/>
                    </figure>
                    <div className="iban-2-section_text col-md-6 d-lg-none d-md-none d-ms-block">
                        <p>
                            Estamos aquí para aquellos que se niegan a conformarse. Quienes nunca dejan de avanzar. Quienes continúan buscando nuevas ideas y mejores experiencias en todo lo que hacen.
                        </p>
                        <p>Porque el mundo tan conectado de hoy merece un compañero financiero igual de avanzado. Uno que se adapta a tus necesidades, te da el control y que continuamente te lleva a nuevos y estimulantes horizontes.</p>
                    </div>
                </section>

                <section className="iban-5-section d-flex justify-content-center align-items-center container">
                    <h5 className="text-center">Únete a nuestra comunidad global y accede a un mundo más allá de la banca</h5>
                </section>

                <section className="iban-3-section container">
                    <h5 className="text-center">Inversores</h5>
                    <p className="container text-left col-10">iBAN cuenta con el respaldo de algunos de los inversores de mayor renombre de Europa. Han invertido en empresas de primera como Revolut.</p>
                </section>

                <section className="iban-4-section container">
                    <h5 className="text-center">Los medios hablan de nosotros</h5>
                    <p className="container d-none d-ms-block d-md-block d-lg-block">Iniciamos iBAN desde nuestro hogar en Londres, y desde entonces hemos ido expandiéndonos por el mundo. Nuestra evolución ha sido recogida por los medios. Aqui te mostramos unas menciones que algunos periodistas y medios de comunicación han publicado sobre nosotros.</p>
                    <div className="comment">
                        <ul>
                            <li>
                                “iBAN como uno de los actores principales en un sector que está asistiendo a una verdadera transformación sin precedentes” - <strong>
                                <Link to="https://cincodias.elpais.com/cincodias/2017/11/17/emprendedores/1510907958_535416.html" target="_blank">CincoDías</Link></strong>
                            </li>
                            {/*<li>*/}
                                {/*”iBAN, fintech enfocada a digitalizar los procesos complejos y convertirlos en procesos rápidos para todos sus clientes, tiene el objetivo de simplificar y automatizar tecnológicamente productos de inversión y ahorro para acercarlos al gran público” - <strong><Link*/}
                                {/*to="http://www.finanzas.com/noticias/noticias-corporativas/20171204/caser-iban-wallet-alian-3737450.html" target="_blank">Inversion y finanzas</Link></strong>*/}
                            {/*</li>*/}


                        </ul>
                    </div>
                </section>



            </div>
        )
    }

}


export default Iban
