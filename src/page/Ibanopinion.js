import React, {Component} from 'react'
import heart from './../img/Heart.svg'
import OwlCarousel from 'react-owl-carousel';
import MetaTags from 'react-meta-tags';


import victor from './../img/opinion/VictorManuelLobatoFernandez.png'
import carmen from './../img/opinion/MariadelCarmenVinazaRuiz.png'
import francisco from './../img/opinion/FranciscoJimenez(Antonio Pajon).png'
import monica from './../img/opinion/MonicaRuiz.png'
import cristiana from './../img/opinion/AnaCristinaGonzalez Diaz.png'

class Ibanopinion extends Component {

    constructor(props) {
        super(props);

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
                <div className="item" key={3}>
                    <li>
                        <p className="h4">A la vanguardia del sistema financiero</p>
                        <div>
                            <figure>
                                <img src={cristiana} alt=""/>
                            </figure>
                            <span>“He descubierto con iBAN un nuevo mundo oculto para mí y estoy convencida que para muchos ahorradores de este país. Las FinTech como iBAN que se han puesto a la vanguardia del sistema financiero son un valor añadido con sus productos, transparencia y, sobre todo, rentabilidad” <strong> -Cristina González</strong></span>
                        </div>
                    </li>
                </div>,
                <div className="item" key={3}>
                    <li>
                        <p className="h4">No puedo estar más contenta de la decisión</p>
                        <div>
                            <figure>
                                <img src={monica} alt=""/>
                            </figure>

                            <span>“La plataforma resulta muy cómoda e intuitiva y me permite controlar de forma segura mis inversiones en todo momento y desde cualquier lugar con tan sólo una conexión a Internet. No puedo estar más contenta de la decisión que tomé en su día” <strong> -Mónica Ruiz</strong></span>
                        </div>
                    </li>
                </div>,
                <div className="item" key={2}>
                    <li>
                        <p className="h4">Lo mejor de la plataforma es que es cómoda y fácil de manejar</p>
                        <div>
                            <figure>
                                <img src={carmen} alt=""/>
                            </figure>
                            <span>Con ellos, tú eliges en qué tipo de producto inviertes tu dinero. Yo elegí uno de rentabilidad media que me permite disponer del dinero en cualquier momento. Lo mejor de la plataforma, es que es cómoda y fácil de manejar” <strong> -Carmen Vinaza</strong></span>

                        </div>
                    </li>
                </div>,
                <div className="item" key={1}>
                    <li>
                        <p className="h4">Debo decir que los productos son muy competitivos</p>
                        <div>
                            <figure>
                                <img src={victor} alt=""/>
                            </figure>
                            <span>
                                    “iBAN como uno de los actores principales en un sector que está asistiendo a una verdadera transformación sin precedentes” <strong> -Víctor Manuel Lobato</strong>
                                    </span>
                        </div>
                    </li>
                </div>,
                <div className="item" key={3}>
                    <li>
                        <p className="h4">iBAN no tiene competencia</p>
                        <div>
                            <figure>
                                <img src={francisco} alt=""/>
                            </figure>
                            <span>“Me convenció esta alternativa a la banca. Las nuevas tecnologías hacen que la relación entre productos y cliente sea más fácil, más fluida y más dinámica. iBAN no tiene competencia” <strong> -Francisco Jiménez</strong></span>
                        </div>
                    </li>
                </div>
            ],

        };
    }


    render(){
        return(
            <div className="opinion container-fluid">
                <MetaTags>
                    <title>iBAN Wallet - Opiniones</title>
                    <meta name="description" content="Conoce lo que habla sobre iBAN Wallet, sobre estrategias de inversión y rentabilidad de su dinero." />
                </MetaTags>

                <section className="opinion-1-section">
                    <div className="text-left opinion-1-section_text container">
                        <h1>Opiniones sobre iBAN</h1>
                        <h5 className="h2">Nos encanta escucharte. Tus comentarios nos ayudan a definir lo que ofrecemos.</h5>
                    </div>
                    <div className="cover d-flex justify-content-around align-items-center">
                        <figure>
                            <img src={heart} alt=""/>
                        </figure>
                        <figure>
                            <img src={heart} alt=""/>
                        </figure>
                        <figure>
                            <img src={heart} alt=""/>
                        </figure>
                        <figure>
                            <img src={heart} alt=""/>
                        </figure>
                        <figure>
                            <img src={heart} alt=""/>
                        </figure>
                    </div>
                </section>

                <section className="opinion-2-section ">
                    <h2 className="text-center">Descubre lo que la gente dice sobre iBAN</h2>
                    <div className="comment container">
                        <ul>
                            <OwlCarousel
                                className="owl-theme"
                                {...this.state.options}>

                                {this.state.items}

                            </OwlCarousel>
                            <li className="d-none d-ms-block d-md-block d-lg-block">
                                <p className="h4">Debo decir que los productos son muy competitivos</p>
                                <div>
                                    <figure>
                                        <img src={victor} alt=""/>
                                    </figure>
                                    <span>
                                    “iBAN como uno de los actores principales en un sector que está asistiendo a una verdadera transformación sin precedentes” <strong> -Víctor Manuel Lobato</strong>
                                    </span>
                                </div>
                            </li>
                            <li className="d-none d-ms-block d-md-block d-lg-block">
                                <p className="h4">Lo mejor de la plataforma es que es cómoda y fácil de manejar</p>
                                <div>
                                    <figure>
                                        <img src={carmen} alt=""/>
                                    </figure>
                                    <span>Con ellos, tú eliges en qué tipo de producto inviertes tu dinero. Yo elegí uno de rentabilidad media que me permite disponer del dinero en cualquier momento. Lo mejor de la plataforma, es que es cómoda y fácil de manejar” <strong> -Carmen Vinaza</strong></span>

                                </div>
                            </li>
                            <li className="d-none d-ms-block d-md-block d-lg-block">
                                <p className="h4">iBAN no tiene competencia</p>
                                <div>
                                    <figure>
                                        <img src={francisco} alt=""/>
                                    </figure>
                                    <span>“Me convenció esta alternativa a la banca. Las nuevas tecnologías hacen que la relación entre productos y cliente sea más fácil, más fluida y más dinámica. iBAN no tiene competencia” <strong> -Francisco Jiménez</strong></span>
                                </div>
                            </li>
                            <li className="d-none d-ms-block d-md-block d-lg-block">
                                <p className="h4">No puedo estar más contenta de la decisión</p>
                                <div>
                                    <figure>
                                        <img src={monica} alt=""/>
                                    </figure>

                                    <span>“La plataforma resulta muy cómoda e intuitiva y me permite controlar de forma segura mis inversiones en todo momento y desde cualquier lugar con tan sólo una conexión a Internet. No puedo estar más contenta de la decisión que tomé en su día” <strong> -Mónica Ruiz</strong></span>
                                </div>
                            </li>
                            <li className="d-none d-ms-block d-md-block d-lg-block">
                                <p className="h4">A la vanguardia del sistema financiero</p>
                                <div>
                                    <figure>
                                        <img src={cristiana} alt=""/>
                                    </figure>
                                    <span>“He descubierto con iBAN un nuevo mundo oculto para mí y estoy convencida que para muchos ahorradores de este país.Las FinTech como iBAN que se han puesto a la vanguardia del sistema financiero son un valor añadido con sus productos, transparencia y, sobre todo, rentabilidad” <strong> -Cristina González</strong></span>
                                </div>
                            </li>


                        </ul>
                    </div>
                </section>

            </div>
        )
    }

}


export default Ibanopinion
