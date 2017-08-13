import React from "react";
import { Grid, Row, Col, Button, Modal } from 'react-bootstrap';
import moment from "moment";

export default class ActivityModal extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            showModal: false
        }
    }

    componentWillMount() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <Modal animation={false} bsSize="small" show={this.state.showModal} onHide={this.close.bind(this) }>
                    <div className="close-icon icon-action_close_dark-ve" onClick={this.close.bind(this)}></div>
                    <Modal.Header>
                        <Modal.Title><div className="icon-logo"></div></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="information">
                            <div className="icon-user_selfie_ph_medium">
                                <div className="icon-logo_circle"></div>
                            </div>
                            <div className="icon-receipt_confirmed"></div>
                            <h6>Simple Yoti SDK App</h6>
                            <p>viewed this information about you< br />
                            at 11:43 on 01 June 2017</p>
                        </div>

                        <div className="title">Given Name(s)</div>
                        <p className="name">Mitesh</p>
                        <div className="title">Mobile Number</div>
                        <p>+447951234567</p>
                        
                    </Modal.Body>                    
                </Modal>
            </div>
        );
  }
}
