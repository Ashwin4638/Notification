import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends React.Component{
    render() {
        return (
            <div className='Navbar'>
                <li>
                <Link to="/">Component1</Link>
                </li>
                <li>
                <Link to="/component2">Component2</Link>
                </li>
                <li>
                <Link to="/component3">Component3</Link>
                </li>
            </div>
        );
    }
}
export default Navbar;