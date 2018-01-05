import React, {Component} from 'react'

class Menu extends Component {
    render(){
        return(
            <header class="d-flex justify-content-between align-items-center page-menu">
                <figure class="col-md-4">
                    <img src="" alt="logo" />
                </figure>
                <nav class="col-md-8 menu">
                    <ul class="d-flex justify-content-around">
                        <li>menu1</li>
                        <li>menu2</li>
                        <li>menu3</li>
                        <li>menu4</li>
                        <li>menu5</li>
                        <li>menu6</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu;