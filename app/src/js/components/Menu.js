import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class Menu extends React.Component {
    render() {
        return(
            <Col sm={2}>                
                <aside className="menu">
                    <ul><li>Activity</li></ul>
                </aside>
            </Col>
        )
    }
}