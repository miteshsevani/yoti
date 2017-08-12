import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return(
            
                <Grid fluid={true}>
                    <header>
                    <Row>
                        <Col sm={12}>
                            <div className="icon-logo"></div>                        
                        </Col>
                    </Row>
                    </header>
                </Grid>            
            
        )
    }
}