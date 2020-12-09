// PACKAGES
import React, { Component } from 'react';
import binanceLogo from '../assets/binancecoin.png'
// import { connect } from 'react-redux';
// MODULES
// STYLES
import './NavigationBar.css';



class NavigationBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                <img src={binanceLogo} style={{height: "80%"}} alt="logo"/>
                <span className="navbar-brand" href="#">Binance</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span className="nav-link" href="#">Home <span className="sr-only">(current)</span></span>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="BTC" aria-label="Search" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}


export default NavigationBar;
