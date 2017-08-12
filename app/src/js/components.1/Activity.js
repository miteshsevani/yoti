import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import moment from "moment";

import ActivityItem from "./ActivityItem";

export default class Activity extends React.Component {
    render() {        
        const {data} = this.props;
        return(            
            <Col sm={10}>
                <h3>Activity</h3>
                <p>See a record of everyone you have sgared details with.</p>
                <ActivityItem />
            </Col>                      
        )
    }
}