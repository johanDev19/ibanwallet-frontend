import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel';
import {Helmet} from 'react-helmet';


import icon1 from './../img/Inversiones_screen_1.png'
import icon2 from './../img/Rentabilidad.svg'
import icon3 from './../img/Comisiones.svg'
import icon4 from './../img/Accesible.svg'
import icon5 from './../img/banner_07.png'

class Inversion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imgLoad: false,
            options: {
                loop: true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            },

            items: [

                <div className="item" key={1}>
                    <div className="card d-flex justify-content-center align-items-center container">
                        <figure>
                            <img src={icon2} alt=""/>
                        </figure>
                        <p>MAYOR RENTABILIDAD</p>
                        <p className="text-center">Una cartera de inversión diversificada y gestionada por ti.</p>
                    </div>
                </div>,
                <div className="item" key={2}>
                    <div className="card d-flex justify-content-center align-items-center container">
                        <figure>
                            <img src={icon4} alt=""/>
                        </figure>
                        <p>SIEMPRE ACCESSIBLE</p>
                        <p className="text-center">Puedes solicitar tu dinero cuando quieras.</p>
                    </div>
                </div>,
                <div className="item" key={3}>
                    <div className="card d-flex justify-content-center align-items-center container">
                        <figure>
                            <img src={icon3} alt=""/>
                        </figure>
                        <p>COMISIONES MÍNIMAS</p>
                        <p className="text-center">La aplicación de la tecnología a la gestión de tus inversiones nos permite ofrecerte los mejores productos a un menor coste</p>
                    </div>
                </div>
            ],

        };


    }

    handleLoad(){
        setTimeout(()=>{
            this.setState({
                imgLoad: true
            })
        }, 500)

    }

    render(){
        return(
            <div className="inversion">
                <Helmet>
                    <title>iBAN Wallet - Estrategias de inversión</title>
                    <meta name="description" content="Mejores estrategias de inversión. Invierte tu dinero en fondos, invierte en bolsa de forma segura y transparente." />
                </Helmet>
                <section className="inv-1-section  d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-start  inv-1-section_container">
                        <div className="inv-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h1 className="">El modelo de inversión de los grandes inversores al alcance de todos</h1>
                            <ul>
                                <li>Una propuesta centrada y enfocada en el cliente, con la máxima claridad, honestidad e independencia.</li>
                                <li>Nuestros clientes tienen acceso a los mejores productos de ahorro e inversión, sin conflictos de intereses y eliminado todo aquello que no aporta valor.</li>
                                <li>Proponemos inversiones diversificadas, con rentabilidades consistentes en el largo plazo.</li>
                            </ul>
                        </div>
                        <div className="inv-1-section_img">
                            <figure className={"mobile-img justify-content-center align-items-center " + (this.state.imgLoad === true?'d-flex animated fadeInRight':'d-none')}>
                                <img src={icon1} alt="card" onLoad={this.handleLoad.bind(this)}/>
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="inv-2-section">
                    <h4 className="text-center">Todo lo que iBAN hace. <span className="d-block">¡DE VERDAD!</span></h4>

                    <div className="inv-2-section_card d-flex justify-content-between align-items-center flex-wrap">
                        <OwlCarousel
                            className="owl-theme"
                            {...this.state.options}>

                            {this.state.items}

                        </OwlCarousel>

                        <div className="card desktop d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon2} alt=""/>
                            </figure>
                            <p>MAYOR RENTABILIDAD</p>
                            <p className="text-center">Una cartera de inversión diversificada y gestionada por ti.</p>
                        </div>
                        <div className="card desktop d-flex justify-content-center align-items-center container">
                            <figure>
                                <img src={icon4} alt=""/>
                            </figure>
                            <p>SIEMPRE ACCESSIBLE</p>
                            <p className="text-center">Puedes solicitar tu dinero cuando quieras.</p>
                        </div>
                        <div className="card desktop  d-flex  justify-content-center align-items-center container">
                            <figure>
                                <img src={icon3} alt=""/>
                            </figure>
                            <p>COMISIONES MÍNIMAS</p>
                            <p className="text-center">La aplicación de la tecnología a la gestión de tus inversiones nos permite ofrecerte los mejores productos a un menor coste.</p>
                        </div>
                    </div>
                </section>



                <section className="inv-3-section d-flex justify-content-between align-items-center container-fluid">
                    <figure>
                        <img src={icon5} alt=""/>
                    </figure>
                    <div className="inv-3-section_text">
                        <h2 className="text-left">HA LLEGADO EL <span>MOMENTO</span></h2>
                        <p>iBAN pone a disposición de sus clientes una forma más eficiente ​de gestionar sus ahorros. Productos de ahorro e inversión consistentes y rentables, adaptados al perfil de cada cliente. La mejor tecnología al servicio de los ahorros de nuestros clientes.</p>
                        <p>Lo que es ya una realidad en otros países como Reino Unido está ahora al alcance de los ahorradores en España. Empieza a gestionar tus ahorros en iBAN y disfruta de una forma distinta de hacer las cosas.</p>

                    </div>
                </section>


            </div>
        )
    }
}

export default Inversion
