import React, {Component} from 'react'
import MetaTags from 'react-meta-tags';
import OwlCarousel from 'react-owl-carousel';


//images
import icon1 from './../img/planahorro_screen1.png'
import icon2 from './../img/planahorro_screen2-2-3.png'
import icon3 from './../img/planahorro_screen3-2.png'
import img1 from './../img/pexels-photo-774909.jpeg'



class Ahorro extends Component {

    constructor() {
        super();

        this.state = {
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
                    <MetaTags>
                        <title>iBAN Wallet - Planes de ahorro</title>
                        <meta name="description" content=" iBAN Wallet la nueva forma de ahorrar. Plan de Ahorro iBAN, contratalo en menos de 5 minutos." />
                    </MetaTags>
                    <div className="ah-2-section_text d-flex align-items-center justify-content-around">

                        <div className="text">
                            <h6 className="h2">Tus preferencias</h6>
                            <span>PARA OFRECERTE EL PLAN QUE<span> MEJOR SE ADAPTE A TI</span></span>
                            <p className="d-none d-ms-block d-md-block d-lg-block">Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. Además con la máxima flexibilidad porque podrás cambiarlo cuando quieras.</p>
                        </div>

                        <figure>
                            <img src={icon1} alt="ahorro1"/>
                        </figure>
                        <p className="d-lg-none d-md-none d-ms-block text-left">Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. Además con la máxima flexibilidad porque podrás cambiarlo cuando quieras.</p>

                    </div>
                </div>,
                <div className="item" key={2}>
                    <div className="ah-2-section_text d-flex align-items-center flex-row-reverse justify-content-around ">
                        <div className="text">
                            <h6 className="h2">Tu perfil de ahorrador</h6>
                            <span>PARA CONFIGURAR EL PLAN A TU MEDIDA</span>
                            <p className="d-none d-ms-block d-md-block d-lg-block">Responde sencillas preguntas sobre ti para que podamos calcular tu perfil de ahorrador y diseñar tu plan a medida.</p>
                        </div>
                        <figure>
                            <img src={icon2} alt="ahorro2"/>
                        </figure>
                        <p className="d-lg-none d-md-none d-ms-block text-left">Responde sencillas preguntas sobre ti para que podamos calcular tu perfil de ahorrador y diseñar tu plan a medida.</p>
                    </div>
                </div>,
                <div className="item" key={3}>
                    <div className="ah-2-section_text d-flex align-items-center justify-content-around">
                        <div className="text">
                            <h6 className="h2">Introduce tus datos personales</h6>
                            <span>Y ACTÍVALO 100% ONLINE</span>
                            <p className="d-none d-ms-block d-md-block d-lg-block">Actívalo en 5 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                        </div>
                        <figure>
                            <img src={icon3} alt="ahorro3"/>
                        </figure>
                        <p className="d-lg-none d-md-none d-ms-block text-left">Actívalo en 5 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                    </div>
                </div>
            ],
            elementP: 0,
            scrollP: window.pageYOffset
        };

        this.getScroll = this.getScroll.bind(this)
        this.getScroll()

    }

    componentDidMount(){
        this.setState({
            elementP: document.getElementById('ahorro-a-1').getBoundingClientRect().y
        })
    }


    getScroll(){

        window.addEventListener("scroll", () => {

            this.setState({
                scrollP: window.pageYOffset,
                elementP: document.getElementById('ahorro-a-1').getBoundingClientRect().y
            })


        });

    }



    render(){
        return (
            <div className="ahorro container-fluid">


                <section className="ah-2-section">

                    <div className="d-flex flex-column align-items-center">
                        <h1 className="text-center h2">¿Cómo contratar un plan de ahorro?</h1>

                        <OwlCarousel
                            className="owl-theme"
                            {...this.state.options}>

                            {this.state.items}
                        </OwlCarousel>


                        <div className="d-none d-lg-block d-md-block">
                            <div className="ah-2-section_text d-flex align-items-center justify-content-around">

                                <div className="text">
                                    <h6 className="h2">Tus preferencias</h6>
                                    <span>PARA OFRECERTE EL PLAN QUE<span> MEJOR SE ADAPTE A TI</span></span>
                                    <p className="d-none d-ms-block d-md-block d-lg-block">Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. Además con la máxima flexibilidad porque podrás cambiarlo cuando quieras.</p>
                                </div>

                                <figure>
                                    <img src={icon1} alt="ahorro1"/>
                                </figure>
                                <p className="d-lg-none d-md-none d-ms-block text-left">Dinos tus preferencias, con cuánto quieres empezar y cuánto puedes poner al mes. Además con la máxima flexibilidad porque podrás cambiarlo cuando quieras.</p>

                            </div>
                            <div className="ah-2-section_text d-flex align-items-center flex-row-reverse justify-content-around ">
                                <div className="text">
                                    <h6 className="h2">Tu perfil de ahorrador</h6>
                                    <span>PARA CONFIGURAR EL PLAN A TU MEDIDA</span>
                                    <p className="d-none d-ms-block d-md-block d-lg-block">Responde sencillas preguntas sobre ti para que podamos calcular tu perfil de ahorrador y diseñar tu plan a medida.</p>
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
                                    <p className="d-none d-ms-block d-md-block d-lg-block">Actívalo en 5 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                                </div>
                                <figure>
                                    <img src={icon3} alt="ahorro3"/>
                                </figure>
                                <p className="d-lg-none d-md-none d-ms-block text-left">Actívalo en 5 minutos y totalmente online, nuestra tecnología se encarga de todo.</p>
                            </div>
                        </div>


                    </div>


                </section>

                <section className="ah-1-section row align-items-center justify-content-center">
                    <h2 className=" m-text d-lg-none d-md-none d-ms-block text-left text-center">¿Por qué debería ahorrar con iBAN?</h2>


                    <figure className={this.state.scrollP > this.state.elementP?'animated fadeInLeft':'d-none'} id="ahorro-a-1">
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
                            <li><strong>Siempre disponible, con las mejores condiciones</strong>
                                <p>
                                    Porque ahorrar con nosotros es cómodo, desde el móvil, disponible cuando quieras y con las mejores condiciones.
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
