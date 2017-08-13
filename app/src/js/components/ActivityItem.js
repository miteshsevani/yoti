import React from "react";
import { Button, Grid, Row, Col, Modal } from 'react-bootstrap';
import moment from "moment";

import ActivityModal from "./ActivityModal";

export default class ActivityItem extends React.Component {
    constructor() {
        super();
        this.state = { 
            showModal: false 
        }
    }

    showModal() {
        this.setState({
            showModal: true            
        })
    }

    render() {        
        const {details} = this.props;
        return(
            <Row>
                <Col sm={12}>                    
                    <div className="activity">
                        <div className="date-header">
                            {moment.unix(1500394361).format('dddd Mo MMM YYYY')}  
                        </div>
                        <div className="activity-content" onClick={this.showModal.bind(this)}>

                            { this.state.showModal ? <ActivityModal /> : null }

                            <Col sm={2}>
                                <div className="icon-activity_tick"></div>
                                <div className="icon-user_selfie_ph"></div>
                            </Col>
                            <Col sm={6}>
                                <div>Yoti Shared</div>                                    
                            </Col>
                            <Col sm={4}>
                                <div className="activity-timestamp">
                                    {moment.unix(1500394361).format('HH:MM')}
                                    <br />
                                    {moment.unix(1500394361).format('MM MMMM YYYY')}
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}