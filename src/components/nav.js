import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    state = {
        isShow: false,
    }
    navToggle = () => {
        this.setState({ isShow: !this.state.isShow })
    }
    render() {
        return (
            <nav className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.navToggle} >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isShow ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/rooms">Rooms </Link></li>

                    </ul>

                </div>

            </nav>
        )
    }
}