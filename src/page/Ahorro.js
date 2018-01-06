import React, {Component} from 'react'
import icon1 from './../img/planahorro_screen1.png'
import icon2 from './../img/planahorro_screen2.png'
import icon3 from './../img/planahorro_screen3-2.png'


class Ahorro extends Component {
    render(){
        return (
            <div className="ahorro container-fluid">
                <section className="ah-1-section row align-items-center">
                    <figure className="col-md-6">
                        <img src="https://n26.com/content/uploads/2016/10/n26-credit-card-unique-features-phone-de-ret-1-1x.png" alt=""/>
                    </figure>
                    <div className="ah-1-section_text col-md-6">
                        <h2>¿Por qué debería ahorrar con iBAN?</h2>
                        <ol>
                            <li><strong>La inflación se come tus ahorros</strong>
                                <p>
                                    Porque lo que hacíamos la gran mayoría era simplemente acumular dinero y la inflación no perdona.
                                </p>
                            </li>
                            <li><strong>Tus ahorros generan más ahorros</strong>
                                <p>
                                    Porque con nosotros tus ahorros se ponen a trabajar y generan nuevos ahorros a largo plazo.
                                </p>
                            </li>
                            <li><strong>Siempre disponible, sin claúsulas abusivas</strong>
                                <p>
                                    Porque ahorrar con nosotros es cómodo, desde el móvil, disponible cuando quieras y sin cláusulas abusivas
                                </p>
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="ah-2-section">
                    <h2 className="text-center">¿Cómo funciona?</h2>

                    <div className="d-flex flex-column align-items-center">
                        <div className="ah-2-section_text d-flex align-items-center">
                            <div className="text">
                                <h6>1. Tus preferencias</h6>
                                <span>PARA OFRECERTE EL PLAN QUE MEJOR SE ADAPTE A TI</span>
                                <p>Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. No te agobies porque podrás cambiarlo cuando quieras.</p>
                            </div>
                            <figure>
                                <img src={icon1} alt="ahorro1"/>
                            </figure>
                        </div>
                        <div className="ah-2-section_text d-flex align-items-center flex-row-reverse">
                            <div className="text">
                                <h6>2. Tu perfil de ahorrador</h6>
                                <span>PARA CONFIGURAR EL PLAN A TU MEDIDA</span>
                                <p>Responde 10 sencillas preguntas sobre ti para que podamos calcular tu perfil de ahorrador y diseñar tu plan a medida.</p>
                            </div>
                            <figure>
                                <img src={icon3} alt="ahorro2"/>
                            </figure>
                        </div>
                        <div className="ah-2-section_text d-flex align-items-center">
                            <div className="text">
                                <h6>3. Introduce tus datos personales</h6>
                                <span>Y ACTÍVALO 100% ONLINE</span>
                                <p>Actívalo en 10 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                            </div>
                            <figure>
                                <img src={icon2} alt="ahorro3"/>
                            </figure>
                        </div>
                    </div>


                </section>
            </div>
        )
    }
}

export default Ahorro