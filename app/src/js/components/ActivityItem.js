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

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {        
        const {data} = this.props;
        const timeStamp = data.transaction['unix-timestamp'];
        
        return(
            <div>
                <Row>
                    <Col sm={12}>                    
                        <div className="activity">
                            <div className="date-header">
                                {moment.unix(timeStamp).format('DD MMMM YYYY')}                                
                            </div>
                            <div className="activity-content" onClick={this.toggleModal.bind(this)}>

                                { this.state.showModal ? <ActivityModal resetModal={this.toggleModal.bind(this)} data={data} /> : null }

                                <Col sm={2}>
                                    <div className="icon-activity_tick"></div>
                                    <div className="icon-user_selfie_ph"></div>
                                </Col>
                                <Col sm={6}>
                                    <div>Yoti Shared</div>                                    
                                </Col>
                                <Col sm={4}>
                                    <div className="activity-timestamp">
                                        {moment.unix(timeStamp).format('HH:mm')}
                                        <br />
                                        {moment.unix(timeStamp).format('DD MMMM YYYY')}
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}