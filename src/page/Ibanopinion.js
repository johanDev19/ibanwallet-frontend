import React, {Component} from 'react'
import heart from './../img/Heart.svg'


import victor from './../img/opinion/VictorManuelLobatoFernandez.png'
import carmen from './../img/opinion/MariadelCarmenVinazaRuiz.png'
import francisco from './../img/opinion/FranciscoJimenez(Antonio Pajon).png'
import monica from './../img/opinion/MonicaRuiz.png'
import cristiana from './../img/opinion/AnaCristinaGonzalez Diaz.png'

class Ibanopinion extends Component {
    render(){
        return(
            <div className="opinion container-fluid">


                <section className="opinion-1-section">
                    <div className="text-left opinion-1-section_text">
                        <h1 className="display-4">Opiniones sobre iBAN</h1>
                        <h5 className="h2">Nos encanta escucharte. Tus comentarios nos ayudan a definir lo que ofrecemos.</h5>
                    </div>
                    <div className="cover d-flex justify-content-around align-items-center ">
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

                {/*https://lh5.googleusercontent.com/HihhayqoNONGHBdX6NGJLmJflEdKMZFTceCjWgZKsJXWuIYK_GigAhC9HyolD9ranvw7r0ACjge0xHXNIM3dkzyIAhWXSzfFhOD_hpwsq3-7Jz9RYD283dTuH3WfUrCrJrS1NFNmcw*/}
                {/*https://lh4.googleusercontent.com/G1pjKwAMsOFzsXm5xVuXIra_z-FFU4y2qttZ5yZX09798EdldgTuipAyY-xeKIzUYFmVl0Nco92wk1FTnEtHzzxBcU7XNmEaiEKHm3hg3yU2rG2ynKlpacgc6fx0H83Flz7OOYu7YA*/}
                {/*https://lh6.googleusercontent.com/ML_GviTpp7HH1LSnkbxKBqmvdo58ga28ykg2jj5Zdvs8LLzgjQ4JkUxosyJOnVu9Qlm5XTI6nKEBX3qximInkpZSYJ6QIOIQbRdVakrEmAQ112leP37apQhAv3hDFDKEugY3JPLnRw*/}
                {/*https://lh5.googleusercontent.com/TBy480Gh34-Axpe8-qqBi-FXYhkszRH7bnrHdNvUlATaIvtvurOGp9yDfIlPk9fm7E4Rx_L4Ptni3y7RI8LRh1-qXEEhIyI3y6weC-DuG2uEO5YUxc9ObwIaS-7D426nX5Eoqg19zQ*/}
                {/*https://lh5.googleusercontent.com/2Igei-OeEkOCunPe6YibUVBymVr2f172l4Go-JQH1B0aAJwWrJ6sb_ClDDINsfj1kjTJ-HQKgCYdhBk2tkBlv7CzccLiNVmqkgpjXThiRzZAaHQhRwQaMiUMamz3mkJwT5VR_EM8pg*/}
                {/*https://lh3.googleusercontent.com/8vFMPvVfGhnA5q7BYfdVJvUQyyjdSVTGKyGp1CRH5TJs0ZbYyLlOmOUvmssSXy-AO_PeRNlQq1L5z0nOx6ei-Q3tmg2aZQ6-_o2YOU0JOHizR27EYOHWQQ7y2HIsxG8mrSAh_XADxA*/}


                <section className="opinion-2-section ">
                    <h2 className="text-center">Descubre lo que la gente dice sobre iBAN</h2>
                    <div className="comment container">
                        <ul>
                            <li>
                                <p className="h4">Debo decir que los productos son muy competitivos</p>
                                <div>
                                    <figure>
                                        <img src={victor} alt=""/>
                                    </figure>
                                    “iBAN como uno de los actores principales en un sector que está asistiendo a una verdadera transformación sin precedentes” <strong> -Víctor Manuel Lobato</strong>
                                </div>
                            </li>
                            <li>
                                <p className="h4">Lo mejor de la plataforma es que es cómoda y fácil de manejar</p>
                                <div>
                                    <figure>
                                        <img src={carmen} alt=""/>
                                    </figure>
                                    Con ellos, tú eliges en qué tipo de producto inviertes tu dinero. Yo elegí uno de rentabilidad media que me permite disponer del dinero en cualquier momento. Lo mejor de la plataforma, es que es cómoda y fácil de manejar” <strong> -Carmen Vinaza</strong>
                                </div>
                            </li>
                            <li>
                                <p className="h4">iBAN no tiene competencia</p>
                                <div>
                                    <figure>
                                        <img src={francisco} alt=""/>
                                    </figure>
                                    “Me convenció esta alternativa a la banca. Las nuevas tecnologías hacen que la relación entre productos y cliente sea más fácil, más fluida y más dinámica. iBAN no tiene competencia” <strong> -Francisco Jiménez</strong>
                                </div>
                            </li>
                            <li>
                                <p className="h4">No puedo estar más contenta de la decisión</p>
                                <div>
                                    <figure>
                                        <img src={monica} alt=""/>
                                    </figure>
                                    “La plataforma resulta muy cómoda e intuitiva y me permite controlar de forma segura mis inversiones en todo momento y desde cualquier lugar con tan sólo una conexión a Internet. No puedo estar más contenta de la decisión que tomé en su día” <strong> -Mónica Ruiz</strong>
                                </div>
                            </li>
                            <li>
                                <p className="h4">A la vanguardia del sistema financiero</p>
                                <div>
                                    <figure>
                                        <img src={cristiana} alt=""/>
                                    </figure>
                                    “He descubierto con iBAN un nuevo mundo oculto para mí y estoy convencida que para muchos ahorradores de este país.Las FinTech como iBAN que se han puesto a la vanguardia del sistema financiero son un valor añadido con sus productos, transparencia y, sobre todo, rentabilidad” <strong> -Cristina González</strong>
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
