import React, {Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <div className="contact container-fluid">
                <section className="contact-1-section">
                    <h1 className="text-center">Contacta con nosotros</h1>
                    <p className="text-center">Estamos encantados de responder a cualquier pregunta que puedas tener, solo envíanos un mensaje a través de nuestro chat de soporte.</p>
                </section>

                <section className="contact-2-section d-flex flex-column justify-content-center align-items-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                    </div>
                    <h4>Chat dentro de la web</h4>
                    <p>Lunes a viernes: 9:00 am - 5:00 pm</p>
                </section>
            </div>
        )
    }
}

export default Contact
