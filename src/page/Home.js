import React, {Component} from 'react'


class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            mobilePosition: 50,
            mobileImage: 'http://images.contentful.com/q33z48p65a6w/6jAoggr5q8oQ4o8o0moo6G/51c31d284b868892fcf84d1009e52889/n26-home-detail-es.png?fit=thumb&w=640'
        };

        this.getScroll = this.getScroll.bind(this);
        this.getScroll();

    }

    getScroll(){

        window.addEventListener("scroll", () => {
            this.setState({
                mobilePosition: window.pageYOffset < 50?50:window.pageYOffset > 1725?1725:window.pageYOffset,
                mobileImage: window.pageYOffset < 1400?'http://images.contentful.com/q33z48p65a6w/6jAoggr5q8oQ4o8o0moo6G/51c31d284b868892fcf84d1009e52889/n26-home-detail-es.png?fit=thumb&w=640':'https://www.revolut.com/assets/media/ios6.1d1d82.jpg'
            })

            console.log(window.pageYOffset)
        });

    }






    render() {
        return(
            <div className="intro-page container-fluid">
                <section className="intro-section">
                    <header>
                        <div className="intro-text container-fluid d-flex flex-column justify-content-start">
                            <h6>Saca el máximo partido a tus inversiones</h6>
                            <h1>Más rentabilidad, menos comisiones.</h1>
                            <h3>Esa es la nueva forma de ahorrar</h3>
                        </div>
                    </header>
                    <figure>
                        <button>Abre tu cuenta</button>
                        <img src="http://images.contentful.com/q33z48p65a6w/3BY2AK4ZuowqaciuCI8IQY/5c403e002633a04dc6d8511a8a700a66/n26-intro-image-the-mobile-bank-1707.jpg%3Ffit=thumb&w=640&fm=jpg&fl=progressive" alt="intro" />
                    </figure>

                </section>

                <section className="info-1-section container ">
                    <div className="d-flex justify-content-between container">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h2>iBAN te facilita toda TU actividad financiera de forma segura y sencilla.</h2>
                            <p>Traspasa su plan de pensiones o contrato los mejores fondos de inversión en tan solo 5 minutos.</p>
                            <span className='font-weight-bold'>Bienvenido a un mundo más allá de la banca, Bienvenido a <a href="">iBAN</a></span>
                        </div>
                        <div className="info-1-section_img ">
                            <figure className={"mobile-img d-flex justify-content-center align-items-center"} style={{top: this.state.mobilePosition - 930}}>
                                <img src={this.state.mobileImage} alt="card"/>
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="info-1-section info-3-section container d-flex align-items-center ">
                    <div className="d-flex justify-content-start container ">
                        <div className="info-1-section_text info-section_text d-flex flex-column align-items-start justify-content-center">
                            <h2>Ayuda al instante</h2>
                            <p>Ponerse en contacto con nosotros es tan fácil como enviar un SMS o un Whatsapp a un amigo. ¡Nuestro equipo de soporte está siempre disponible para ayudar a través del chat en la aplicación!</p>
                        </div>
                    </div>
                </section>

                <section className="info-1-section info-2-section container ">
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
                                <img src="https://www.finanbest.com/wp-content/uploads/2016/11/disp.png" alt="card"/>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home