import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Menu from './Menu';
import Activity from './Activity';

export default class Main extends React.Component {
    render() {
        const data = require("../../data/mock-data.json");
        
        return(
            <div>         
                <Header />
                <Grid fluid={true}>
                    <Row>
                        <Menu />
                        <Activity item={ data.receipts } />
                    </Row>
                </Grid>  
            </div>
        )
    }
}