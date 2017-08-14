import React from "react";
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return(          
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-left">
                        <div className="navbar-brand">
                            <div className="icon icon-logo"></div>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="status">
                            <p className="p3">Connected</p>
                            <div className="icon-connect-on"></div>                            
                        </div>
                        <div className="photo">
                            <img className="selfie" src="img/selfie.png" />
                        </div>
                    </div>
                </div>
            </nav>
            
        )
    }
}