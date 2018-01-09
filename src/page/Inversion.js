import React, {Component} from 'react'
import icon1 from './../img/Inversiones_screen_1.png'
import icon2 from './../img/Rentabilidad.svg'
import icon3 from './../img/Comisiones.svg'
import icon4 from './../img/Accesible.svg'
import icon5 from './../img/banner_07.png'

class Inversion extends Component {


    render(){
        return(
            <div className="inversion">
                <section className="inv-1-section  d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-start  inv-1-section_container">
                        <div className="inv-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h1 className="">El modelo de inversión de los grandes inversores, al alcance de todos</h1>
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
                    <h4 className="text-center">De verdad. <span className="d-block">¡Todo lo que iBAN hace!</span></h4>

                    <div className="inv-2-section_card d-flex justify-content-between align-items-center flex-wrap">
                        <div className="card d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon2} alt=""/>
                            </figure>
                            <p>MAYOR RENTABILIDAD</p>
                            <p className="text-center">Una cartera de inversión diversificada y gestionada por ti.</p>
                        </div>
                        <div className="card d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon4} alt=""/>
                            </figure>
                            <p>SIEMPRE ACCESSIBLE</p>
                            <p className="text-center">Puedes solicitar tu dinero cuando quieras.</p>
                        </div>
                        <div className="card d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon3} alt=""/>
                            </figure>
                            <p>COMISIONES MÍNIMAS</p>
                            <p className="text-center">Un 80% menos de comisiones que la banca. Eliminamos comisiones.</p>
                        </div>
                    </div>
                </section>



                <section className="inv-3-section d-flex justify-content-between align-items-center container-fluid">
                    <figure>
                        <img src={icon5} alt=""/>
                    </figure>
                    <div className="inv-3-section_text">
                        <h2 className="text-left">HA LLEGADO EL <span>MOMENTO</span></h2>
                        <p className="text-left">Gracias a la tecnología de Internet hemos conseguido una reducción de costes en la relación con nuestros clientes y gestión interna que nos permite ofrecer un <strong>modelo de comisiones al alcance de todos.</strong> </p>
                        <p>Esto es ya una realidad en países como Reino Unido. Creemos que ahora es el momento idóneo de su llegada a España, para utilizarlo en tu beneficio.</p>
                    </div>
                </section>


            </div>
        )
    }
}

export default Inversion