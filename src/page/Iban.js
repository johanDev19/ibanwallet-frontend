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
                                “iBAN como uno de los actores principales en un sector que está asistiendo a una verdadera transformación sin precedentes” - <a href="">CincoDías</a>
                            </li>
                            <li>
                                ”iBAN, fintech enfocada a digitalizar los procesos complejos y convertirlos en procesos rápidos para todos sus clientes, tiene el objetivo de simplificar y automatizar tecnológicamente productos de inversión y ahorro para acercarlos al gran público” - <a href="">Inversion y finanzas</a>
                            </li>


                        </ul>
                    </div>
                </section>



            </div>
        )
    }

}


export default Iban
