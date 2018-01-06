import React, {Component} from 'react'
import icon1 from './../img/icon-inv3.svg'

class Iban extends Component {
    render(){
        return(
            <div className="iban container">
                <h1 className="text-center">
                    Creemos que podemos ser la alternativa
                </h1>
                <section className="iban-1-section d-flex justify-content-between align-items-center">
                    <div className="iban-1-section_text">
                        <p>
                            Nos enfocamos en resolver problemas, en vez de vender productos.
                            Queremos hacer un mundo mejor y cambiar la vida de la gente a traves de iBAN.
                        </p>
                    </div>
                    <figure>
                        <img src={icon1} alt=""/>
                    </figure>
                </section>

                <section className="iban-2-section d-flex justify-content-between align-items-center flex-md-row-reverse">
                    <div className="iban-2-section_text">
                        <p>
                            Estamos aquí para aquellos que se niegan a conformarse. Quienes nunca dejan de avanzar. Quienes continúan buscando nuevas ideas y mejores experiencias en todo lo que hacen.
                        </p>
                        <p>Porque el mundo tan conectado de hoy merece un compañero financiero igual de avanzado. Uno que se adapta a tus necesidades, te da el control y que continuamente te lleva a nuevos y estimulantes horizontes.</p>
                    </div>
                    <figure>
                        <img src={icon1} alt=""/>
                    </figure>
                </section>

                <section className="iban-5-section d-flex justify-content-center align-items-center">
                    <h5 className="text-center">Únete a nuestra comunidad global y accede a un mundo más allá de la banca</h5>
                </section>

                <section className="iban-3-section">
                    <h5 className="text-center">Inversores</h5>
                    <p className="container">iBAN cuenta con el respaldo de algunos de los inversores de mayor renombre de Europa. Han invertido en empresas de primera como Revolut.</p>
                </section>

                <section className="iban-4-section">
                    <h5 className="text-center">Los medios hablan de nosotros</h5>
                    <p className="container">Iniciamos iBAN desde nuestro hogar en Londres, y desde entonces hemos ido expandiéndonos por el mundo. Nuestra evolución ha sido recogida por los medios. Aqui te mostramos unas menciones que algunos periodistas y medios de comunicación han publicado sobre nosotros.</p>
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


export default Iban
