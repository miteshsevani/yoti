import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import moment from "moment";

import ActivityItem from "./ActivityItem";
const data = require("../../data/mock-data.json");

export default class Activity extends React.Component {

    renderActivityItem(activity) {
        {/* Pass receipt prop into ActivityItem component */}
        return(            
            <ActivityItem key={activity} index={activity} data={data.receipts[activity]} />
        )
    }

    render() {        
        const {item} = this.props; 

        return(            
            <Col sm={10}>
                <h3>Activity</h3>
                <p>See a record of everyone you have shared details with.</p>
                {/* Loop through receipts */}
                {Object.keys(item).map(this.renderActivityItem.bind(this))}
            </Col>                      
        )
    }
}