import React, { Component} from "react";
import Navbar from "../Navbar/Navbar";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Header</h1>
                <Navbar />
            </div>
        )
    }
}

export default Header;