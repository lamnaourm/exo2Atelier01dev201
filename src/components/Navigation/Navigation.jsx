import { Component } from "react";
import './navigation.css'

class Navigation extends Component {
    render() { 
        return <div className="nav">
            <ul>
                <li><a href="#">Lien 1</a></li>
                <li><a href="#">Lien 2</a></li>
                <li><a href="#">Lien 3</a></li>
                <li><a href="#">Lien 4</a></li>
                <li><a href="#">Lien 5</a></li>
                <li><a href="#">Lien 6</a></li>
                <li><a href="#">Lien 7</a></li>
            </ul>
        </div>;
    }
}
 
export default Navigation;