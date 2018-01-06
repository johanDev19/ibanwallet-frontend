import React, {Component} from 'react'
import icon1 from './../img/Inversiones_screen_1.png'
import icon2 from './../img/Rentabilidad.svg'
import icon3 from './../img/Comisiones.svg'
import icon4 from './../img/Accesible.svg'


class Inversion extends Component {


    render(){
        return(
            <div className="inversion">
                <section className="inv-1-section container ">
                    <div className="d-flex justify-content-start container inv-1-section_container">
                        <div className="inv-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h4 className="text-uppercase">el modelo de inversión de los grandes inversores, al alcance de todos</h4>
                            <ul>
                                <li>La industria <strong>necesita una oferta diferente</strong>, más enfocada en el cliente y que sea clara y honesta.</li>
                                <li>Necesita una novedosa manera invertir, con <strong>productos de bajo coste</strong>, sin conflictos de intereses y eliminando todo lo que no te aporta valor.</li>
                                <li>Conseguimos así brindarte una mejor diversificación y asegurarte <strong>una mayor rentabilidad de tus ahorros.</strong></li>
                            </ul>
                        </div>
                        <div className="inv-1-section_img">
                            <figure className={"mobile-img d-flex justify-content-center align-items-center"}>
                                <img src={icon1} alt="card"/>
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="inv-2-section">
                    <h4 className="text-center">De verdad. Todo lo que iBAN hace</h4>

                    <div className="inv-2-section_card d-flex justify-content-between align-items-center">
                        <div className="card d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon2} alt=""/>
                            </figure>
                            <p>MAYOR RENTABILIDAD</p>
                            <p className="text-center">Una cartera de inversión diversificada y gestionada por ti</p>
                        </div>
                        <div className="card d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon3} alt=""/>
                            </figure>
                            <p>COMISIONES MÍNIMAS</p>
                            <p className="text-center">Un 80% menos de comisiones que la banca. Eliminamos comisiones.</p>
                        </div>
                        <div className="card d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon4} alt=""/>
                            </figure>
                            <p>SIEMPRE ACCESSIBLE</p>
                            <p className="text-center">Puedes solicitar tu dinero cuando quieras.</p>
                        </div>
                    </div>
                </section>

                <section className="inv-3-section d-flex justify-content-end align-items-center">
                    <div className="inv-3-section_text d-flex justify-content-center align-items-center">
                        <div className="container">
                            <h4 className="text-center">HA LLEGADO EL MOMENTO</h4>
                            <p className="text-left">Gracias a la tecnología de Internet hemos conseguido una reducción de costes en la relación con nuestros clientes y gestión interna que nos permite ofrecer un <strong>modelo de comisiones al alcance de todos.</strong> Esto es ya una realidad en países como Reino Unido. Creemos que ahora es el momento idóneo de su llegada a España, para utilizarlo en tu beneficio.</p>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}

export default Inversion