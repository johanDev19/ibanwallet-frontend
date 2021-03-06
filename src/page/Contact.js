import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import {
  Link
} from 'react-router-dom'

import icon1 from './../img/contact.png'
import icon2 from './../img/address.png'

class Contact extends Component {
    render(){
        return(
            <div className="contact container-fluid">
                <Helmet
                    title={"iBAN Wallet - Contacto"}
                    meta={[
                        { name: 'description', content: "Contacta con nosotros y conoce nuestras estrategias de inversion, ahorro de dinero y fondos de inversión." },
                    ]}
                />
                <section className="contact-1-section">
                    <h1 className="text-center">Contacta con nosotros</h1>
                    <p className="text-center">Estamos encantados de responder a cualquier pregunta que puedas tener, solo envíanos un mensaje a través de nuestro chat de soporte.</p>
                </section>

                <div className="row">
                    <section className=" col-lg-6 col-md-12 contact-2-section d-flex flex-column justify-content-center align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <figure>
                                <img src={icon1} alt=""/>
                            </figure>
                        </div>
                        <h4>Chat dentro de la web</h4>
                        <p>Puedes hacernos una pregunta sobre cualquier de nuestros servicios. Si estas fuera del horario déjanos un mensaje y tu dirección email, y te responderemos por correo.</p>
                        <p>Lunes a viernes: 9:00 am - 5:00 pm</p>
                        {/*<p className="text-center">Sábados y Domingos 10pm - 6pm (hora de España)</p>*/}
                        <p><a class="drift-open-chat" href="http://docs.drift.com/" style={{textDecoration:'underline'}}>Pincha aquí para abrir el chat</a>.</p>

                    </section>
                    <section className=" col-lg-6 col-md-12 contact-2-section d-flex flex-column justify-content-center align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <figure>
                                <img src={icon2} alt=""/>
                            </figure>
                        </div>
                        <h4>Contacta con nosotros</h4>
                        <p>Si lo prefieres, estamos a tu disposición para explicarte cualquier aspecto en persona. Puedes concertar una visita cuando quieras y venir a vernos a nuestras oficinas  ¡solo tienes que avisarnos!</p>
                        <div className="address">
                            <p className="text-left address">
                                <i className="fa fa-users" aria-hidden="true"></i>
                                <Link to="https://goo.gl/maps/b2snYhmKmFt" target="_blank">Paseo de la Castellana, 194, Madrid</Link>
                            </p>
                            <p className="text-left address">
                                <i className="fa fa-users" aria-hidden="true"></i>
                                <Link to="https://www.google.com/maps/place/iBAN+Wallet/@37.3821322,-5.9978541,17z/data=!3m1!4b1!4m11!1m5!8m4!1e4!2s107342914997223678157!3m1!1e1!3m4!1s0xd126c17ba3397ad:0x3b790160e28e07e9!8m2!3d37.3821322!4d-5.9956654" target="_blank">Paseo de las Delicias, 1, Sevilla</Link>
                            </p>
                        </div>

                    </section>
                </div>


            </div>
        )
    }
}

export default Contact
