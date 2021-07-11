import React from 'react';

import './styles/Navbar.css';
import logo from '../images/Logo_0TD.jpg'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid"></div>
                <Link className="Navbar__brand" to={"/"}>
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                    <span className="font-weight-light"> Zero To Death </span>
                    <span className="font-weight-bold"> Mondaqueras </span>
                </Link>
            </div>
        )
    }
}

export default Navbar;