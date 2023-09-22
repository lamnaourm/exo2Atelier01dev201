import { Component } from "react";
import logo from '../../images/logo.png'
import './header.css'

class Header extends Component {
    render() {
        return <header>
            <img src={logo} alt='logo' />
            <div>
                <h1>Titre du site</h1>
                <h2>Notre slogan</h2>
            </div>
        </header>;
    }
}

export default Header;