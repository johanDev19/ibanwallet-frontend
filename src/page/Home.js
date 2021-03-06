import React, {Component} from 'react'
import {Helmet} from 'react-helmet';


import banner_1 from './../img/web_inicio_banner.jpg'

import s_1 from './../img/1.png'
import s_2 from './../img/2.png'
import s_3 from './../img/3.jpeg'
import m_img from './../img/Minimalist-Showcase-Project-Presentation.png'
import banenrMobile from './../img/banner_mobil.png'




class Home extends Component {

    constructor(props){
        super(props)


        this.state = {
            imgLoad: false,
            mobilePosition: 80,
            imageDisplay: '270px',
            screenW: window.innerWidth
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

            console.log(window.pageYOffset)
        });

    }

    handleLoad(){
        setTimeout(()=>{
            this.setState({
                imgLoad: true
            })
        }, 500)

    }






    render() {
        return(
            <div className="intro-page container-fluid ">
                <Helmet
                    title={"iBAN Wallet - Finanzas al alcance de todos"}
                    meta={[
                        { name: 'description', content: "Un mundo más allá de la banca -  iBAN Wallet, la nueva forma de ahorrar tu dinero. ¡Únete a iBAN!" },
                    ]}
                />
                    
                <section className="intro-section">
                    <header>
                        <div className="intro-text container-fluid d-flex flex-column justify-content-start">
                            <h6>Saca el máximo partido a tus inversiones</h6>
                            <h1 className="display-4">Más rentabilidad y menos comisiones</h1>
                            <h3 className="font-weight-bold">Esa es la nueva forma de ahorrar</h3>
                        </div>
                    </header>
                    <figure className="banner">
                        <a href="https://secure.myibanwallet.com/account/register">
                            <button>Abre tu cuenta</button>
                        </a>
                        <img src={banner_1} alt="intro"  className="d-md-block d-ms-none d-none"/>
                        <img src={banenrMobile}  className="d-lg-none  d-md-none d-ms-block" alt=""/>
                        <div className={(this.state.screenW < 700 && this.state.imgLoad === true?'info-1-section_img_mobile banner_animation':'info-1-section_img_mobile d-none')}>
                            <div className="img-container" >
                                <figure className={"mobile-img d-flex justify-content-center align-items-center "}>
                                    <div className="d-flex">
                                        <img src={s_1} alt="card" onLoad={this.handleLoad(this)}/>
                                    </div>
                                </figure>
                            </div>

                        </div>
                    </figure>


                </section>

                <section className="info-1-section d-flex align-items-lg-center align-items-start">
                    <div className="d-flex justify-content-between container ">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center col-lg-6 col-md-12 col-sm-12">
                            <h2>iBAN te facilita toda TU vida financiera de forma segura y sencilla.</h2>
                            <p>Traspasa tu plan de pensiones, crea tu plan de ahorros o contrata los mejores fondos de inversión en tan sólo 5 minutos.</p>
                            <span className='font-weight-bold'>Bienvenido a un mundo más allá de la banca. ¡Bienvenido a iBAN!</span>
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
                <section className="banner-img_mobile d-lg-none  d-md-none d-ms-none">
                    <div className={(this.state.screenW < 700 && window.pageYOffset >= 500)?'animated fadeInUp info-1-section_img_mobile':'info-1-section_img_mobile d-none'}>
                        <div className="img-container">
                            <figure className={"mobile-img d-flex justify-content-center align-items-center"}>
                                <div className="d-flex">
                                    <img src={s_2} alt="card" />
                                </div>
                            </figure>
                        </div>

                    </div>
                </section>
                <section className="info-3-section d-flex align-items-lg-center align-item-start">
                    <div className="d-flex justify-content-start container ">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center col-lg-6 col-md-12 col-sm-12">
                            <h2>Ayuda al instante</h2>
                            <p>Ponerse en contacto con nosotros es tan fácil como enviar un SMS o un Whatsapp a un amigo. ¡Nuestro equipo de soporte está siempre disponible para ayudar a través del chat en la aplicación!</p>
                        </div>
                    </div>
                </section>
                <section className="banner-img_mobile_2 d-lg-none  d-md-none d-ms-block">
                    <div className={(this.state.screenW < 700 && window.pageYOffset >= 1300)?'info-1-section_img_mobile animated fadeInLeft':'d-none'}>
                        <div className="img-container">
                            <figure className={"mobile-img d-flex justify-content-center align-items-center"}>
                                <div className="d-flex">
                                    <img src={s_3} alt="card" />
                                </div>
                            </figure>
                        </div>

                    </div>
                </section>

                <section className="info-1-section info-2-section  ">
                    <div className="d-flex justify-content-between container">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h2>ONLINE, RÁPIDO Y SENCILLO</h2>
                            <p>Ofrecemos una inversión adaptada al perfil y necesidades de los clientes, con la máxima profesionalidad, llevando a nuestros clientes los mejores productos de ahorro e inversión del mercado con la más moderna tecnología.</p>
                            <ul>
                                <li><strong>Conoce tu perfil </strong>y disfruta de un plan de inversión adecuado para tus ahorros.</li>
                                <li class="last"><strong>Regístrate sin compromiso</strong> accede a tu área privada y selecciona el producto que prefieres contratar.</li>
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
