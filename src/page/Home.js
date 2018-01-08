import React, {Component} from 'react'


import banner_1 from './../img/web_inicio_banner.jpg'

import s_1 from './../img/1.png'
import s_2 from './../img/2.png'
import s_3 from './../img/3.png'
import m_img from './../img/Minimalist-Showcase-Project-Presentation.png'

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            mobilePosition: 80,
            imageDisplay: '270px'
        };

        this.getScroll = this.getScroll.bind(this);
        this.getScroll();

    }

    getScroll(){

        window.addEventListener("scroll", () => {
            this.setState({
                mobilePosition: window.pageYOffset < 80?80:window.pageYOffset > 1300?1300:window.pageYOffset,
                imageDisplay: window.pageYOffset >= 0 && window.pageYOffset < 690?'270px':window.pageYOffset >= 690 && window.pageYOffset < 1000 ?'0px':'-270px'
            })

            // console.log(window.pageYOffset)
        });

    }






    render() {
        return(
            <div className="intro-page container-fluid ">
                <section className="intro-section">
                    <header>
                        <div className="intro-text container-fluid d-flex flex-column justify-content-start">
                            <h6>Saca el máximo partido a tus inversiones</h6>
                            <h1 className="display-4">Más rentabilidad y menos comisiones</h1>
                            <h3 className="font-weight-bold">Esa es la nueva forma de ahorrar</h3>
                        </div>
                    </header>
                    <figure>
                        <a href="https://secure.myibanwallet.com">
                            <button>Abre tu cuenta</button>
                        </a>
                        <img src={banner_1} alt="intro" />
                    </figure>

                </section>

                <section className="info-1-section d-flex align-items-center">
                    <div className="d-flex justify-content-between container">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center col-md-6 col-sm-12">
                            <h2>iBAN te facilita toda TU actividad financiera de forma segura y sencilla.</h2>
                            <p>Traspasa su plan de pensiones o contrato los mejores fondos de inversión en tan solo 5 minutos.</p>
                            <span className='font-weight-bold'>Bienvenido a un mundo más allá de la banca, Bienvenido a <a href="">iBAN</a></span>
                        </div>
                        <div className="info-1-section_img " style={{top: this.state.mobilePosition }}>
                            <div className="img-container">
                                <figure className={"mobile-img d-flex justify-content-center align-items-center"}>
                                    <div className="d-flex" style={{position: 'relative', left: this.state.imageDisplay}}>
                                        <img src={s_1} alt="card" />
                                        <img src={s_2} alt="card" />
                                        <img src={s_3} alt="card" />
                                    </div>
                                </figure>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="info-3-section d-flex align-items-center ">
                    <div className="d-flex justify-content-start container ">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center col-md-6 col-sm-12">
                            <h2>Ayuda al instante</h2>
                            <p>Ponerse en contacto con nosotros es tan fácil como enviar un SMS o un Whatsapp a un amigo. ¡Nuestro equipo de soporte está siempre disponible para ayudar a través del chat en la aplicación!</p>
                        </div>
                    </div>
                </section>

                <section className="info-1-section info-2-section  ">
                    <div className="d-flex justify-content-between container">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h2>ONLINE, RÁPIDO Y SENCILLO</h2>
                            <p>Empieza desde 1.000 €. TAMBIÉN, PUEDES TRASPASAR TUS FONDOS.</p>
                            <ul>
                                <li><strong>Responde a un test</strong>, conoce tu perfil y analiza tu plan de inversión más adecuado para tus ahorros.</li>
                                <li><strong>Regístrate sin compromiso</strong> para acceder a tu área privada y selecciona qué plan prefieres contratar.</li>
                            </ul>
                        </div>
                        <div className="info-2-section_img ">
                            <figure className={"mobile-img d-flex justify-content-center align-items-center"}>
                                <img src={m_img} alt="card"/>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home