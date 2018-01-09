import React, {Component} from 'react'
import icon1 from './../img/planahorro_screen1.png'
import icon2 from './../img/planahorro_screen2-2-3.png'
import icon3 from './../img/planahorro_screen3-2.png'
import img1 from './../img/pexels-photo-774909.jpeg'

class Ahorro extends Component {
    render(){
        return (
            <div className="ahorro container-fluid">


                <section className="ah-2-section">

                    <div className="d-flex flex-column align-items-center">
                        <h1 className="text-center h2">¿Cómo contratar un plan de ahorro?</h1>

                        <div className="ah-2-section_text d-flex align-items-center justify-content-around">

                            <div className="text">
                                <h6 className="h2">Tus preferencias</h6>
                                <span>PARA OFRECERTE EL PLAN QUE<span> MEJOR SE ADAPTE A TI</span></span>
                                <p className="d-none d-ms-block d-md-block d-lg-block">Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. No te agobies porque podrás cambiarlo cuando quieras.</p>
                            </div>

                            <figure>
                                <img src={icon1} alt="ahorro1"/>
                            </figure>
                            <p className="d-lg-none d-md-none d-ms-block text-left">Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. No te agobies porque podrás cambiarlo cuando quieras.</p>

                        </div>
                        <div className="ah-2-section_text d-flex align-items-center flex-row-reverse justify-content-around ">
                            <div className="text">
                                <h6 className="h2">Tu perfil de ahorrador</h6>
                                <span>PARA CONFIGURAR EL PLAN A TU MEDIDA</span>
                                <p className="d-none d-ms-block d-md-block d-lg-block">Responde 10 sencillas preguntas sobre ti para que podamos calcular tu perfil de ahorrador y diseñar tu plan a medida.</p>
                            </div>
                            <figure>
                                <img src={icon2} alt="ahorro2"/>
                            </figure>
                            <p className="d-lg-none d-md-none d-ms-block text-left">Responde 10 sencillas preguntas sobre ti para que podamos calcular tu perfil de ahorrador y diseñar tu plan a medida.</p>
                        </div>
                        <div className="ah-2-section_text d-flex align-items-center justify-content-around">
                            <div className="text">
                                <h6 className="h2">Introduce tus datos personales</h6>
                                <span>Y ACTÍVALO 100% ONLINE</span>
                                <p className="d-none d-ms-block d-md-block d-lg-block">Actívalo en 10 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                            </div>
                            <figure>
                                <img src={icon3} alt="ahorro3"/>
                            </figure>
                            <p className="d-lg-none d-md-none d-ms-block text-left">Actívalo en 10 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                        </div>
                    </div>


                </section>

                <section className="ah-1-section row align-items-center justify-content-center">
                    <h2 className=" m-text d-lg-none d-md-none d-ms-block text-left text-center">¿Por qué debería ahorrar con iBAN?</h2>
                    <figure className="col-4">
                        <img src={img1} alt=""/>
                    </figure>
                    <div className="ah-1-section_text col-md-6 col-sm-12">
                        <h2 className='d-none d-ms-block d-md-block d-lg-block'>¿Por qué debería ahorrar con iBAN?</h2>
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
            </div>
        )
    }
}

export default Ahorro