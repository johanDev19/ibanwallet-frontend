import React, {Component} from 'react'


class Home extends Component {
    render() {
        return(
            <div>
                <section className="intro-section container">
                    <header>
                        <div className="intro-text container-fluid d-flex flex-column justify-content-start">
                            <h2>El banco móvil</h2>
                            <h1>Una cuenta bancaria en tu móvil</h1>
                        </div>
                    </header>
                    <figure>
                        <button>Abre tu cuenta</button>
                        <img src="http://images.contentful.com/q33z48p65a6w/3BY2AK4ZuowqaciuCI8IQY/5c403e002633a04dc6d8511a8a700a66/n26-intro-image-the-mobile-bank-1707.jpg%3Ffit=thumb&w=640&fm=jpg&fl=progressive" alt="intro" />
                    </figure>

                </section>

                <section className="info-1-section container ">
                    <div className="d-flex justify-content-around">
                        <div className="info-1-section_text d-flex flex-column align-items-start justify-content-center">
                            <h2>La cuenta bancaria y Mastercard de N26</h2>
                            <p>Tu cuenta bancaria, en tu teléfono. Consigue un IBAN y haz todo lo que puedes hacer con cualquier otro banco, solo que más fácilmente y desde cualquier lugar.</p>
                            <a href="">Más información sobre las cuentas bancarias de N26</a>
                        </div>
                        <div className="info-1-section_img ">
                            <figure className="mobile-img d-flex justify-content-center align-items-center">
                                <img src="http://images.contentful.com/q33z48p65a6w/6jAoggr5q8oQ4o8o0moo6G/51c31d284b868892fcf84d1009e52889/n26-home-detail-es.png?fit=thumb&w=640" alt="card"/>
                            </figure>
                        </div>
                    </div>


                </section>
            </div>
        )
    }
}

export default Home