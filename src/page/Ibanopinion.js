import React, {Component} from 'react'
import heart from './../img/Heart.svg'

class Ibanopinion extends Component {
    render(){
        return(
            <div className="opinion container">


                <section className="opinion-1-section">
                    <div className="text-left">
                        <h1>Opiniones sobre iBAN</h1>
                        <h5>Nos encanta escucharte. Tus comentarios nos ayudan a definir lo que ofrecemos.</h5>
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


                <section className="opinion-2-section">
                    <h4 className="text-center">Descubre lo que la gente dice sobre iBAN</h4>
                    <div className="comment">
                        <ul>
                            <li>
                                <p className="h4">Debo decir que los productos son muy competitivos</p>
                                “iBAN como uno de los actores principales en un sector que está asistiendo a una verdadera transformación sin precedentes” -<a href="">Víctor Manuel Lobato</a>
                            </li>
                            <li>
                                <p className="h4">Lo mejor de la plataforma es que es cómoda y fácil de manejar</p>
                                Con ellos, tú eliges en qué tipo de producto inviertes tu dinero. Yo elegí uno de rentabilidad media que me permite disponer del dinero en cualquier momento. Lo mejor de la plataforma, es que es cómoda y fácil de manejar” - <a href="">Carmen Vinaza</a>
                            </li>
                            <li>
                                <p className="h4">iBAN no tiene competencia</p>
                                “Me convenció esta alternativa a la banca. Las nuevas tecnologías hacen que la relación entre productos y cliente sea más fácil, más fluida y más dinámica. iBAN no tiene competencia” - <a href="">Carmen Vinaza</a>
                            </li>
                            <li>
                                <p className="h4">iBAN no tiene competencia</p>
                                “Me convenció esta alternativa a la banca. Las nuevas tecnologías hacen que la relación entre productos y cliente sea más fácil, más fluida y más dinámica. iBAN no tiene competencia” - <a href="">Francisco Jiménez</a>
                            </li>
                            <li>
                                <p className="h4">No puedo estar más contenta de la decisión</p>
                                “La plataforma resulta muy cómoda e intuitiva y me permite controlar de forma segura mis inversiones en todo momento y desde cualquier lugar con tan sólo una conexión a Internet. No puedo estar más contenta de la decisión que tomé en su día” - <a href="">Mónica Ruiz</a>
                            </li>
                            <li>
                                <p className="h4">A la vanguardia del sistema financiero</p>
                                “He descubierto con iBAN un nuevo mundo oculto para mí y estoy convencida que para muchos ahorradores de este país.Las FinTech como iBAN que se han puesto a la vanguardia del sistema financiero son un valor añadido con sus productos, transparencia y, sobre todo, rentabilidad” - <a href="">Cristina González</a>
                            </li>


                        </ul>
                    </div>
                </section>



            </div>
        )
    }

}


export default Ibanopinion
