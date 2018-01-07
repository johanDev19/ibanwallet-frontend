import React, {Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <div className="contact container-fluid">
                <section className="contact-1-section">
                    <h1 className="text-center">Contacta con nosotros</h1>
                    <p className="text-center">Estamos encantados de responder a cualquier pregunta que puedas tener, solo envíanos un mensaje a través de nuestro chat de soporte.</p>
                </section>

                <div className="row">
                    <section className=" col-md-6 contact-2-section d-flex flex-column justify-content-center align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i className="fa fa-comments" aria-hidden="true"></i>
                        </div>
                        <h4>Chat dentro de la web</h4>
                        <p>Lunes a viernes: 9:00 am - 5:00 pm</p>
                        <p className="text-center">Sábados y Domingos 10pm - 6pm (hora del Reino Unido)</p>
                    </section>
                    <section className=" col-md-6 contact-2-section d-flex flex-column justify-content-center align-items-center">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i class="fa fa-university" aria-hidden="true"></i>
                        </div>
                        <h4>Contacta con nosotros</h4>
                        <p>Si lo prefieres, estamos a tu disposición para explicarte cualquier aspecto en persona. Puedes concertar una visita cuando quieras y venir a vernos a nuestras oficinas  ¡solo tienes que avisarnos!</p>
                        <p className="text-center" style={{color: "#4F9FD5"}}>Paseo de la Castellana, 194, Madrid
                            Paseo de las Delicias, 1, Sevilla</p>
                    </section>
                </div>


            </div>
        )
    }
}

export default Contact
