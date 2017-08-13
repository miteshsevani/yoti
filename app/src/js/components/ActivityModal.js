import React from "react";
import { Grid, Row, Col, Button, Modal } from 'react-bootstrap';
import moment from "moment";

export default class ActivityModal extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            showModal: true
        }
    }

    close() {
        this.setState({ showModal: false });
        this.props.resetModal();
    }


    render() {
        const { data } = this.props;
        const type = data.type;
        const modalHeadeerStyle = {
            backgroundImage: 'url("data:image/png;base64,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")',
            backgroundColor: "#DDFFF7",
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center'
        }
        return (
            <div>
                <Modal animation={false} bsSize="small" show={this.state.showModal} onHide={this.close.bind(this) }>
                    <div className="close-icon icon-action_close_dark-ve" onClick={this.close.bind(this)}></div>
                    {type !== "share" ? <Modal.Header style={modalHeadeerStyle}></Modal.Header> : null }
                    <Modal.Body>
                        <div className="information">
                            <div className="icon-user_selfie_ph_medium">
                                <div className="icon-logo_circle"></div>
                            </div>
                            <div className="icon-receipt_confirmed"></div>
                            <h6> { type !== "application" ? "Yoti Shared" : "Simple Yoti SDK App" }</h6>
                            <p>Type = {type}</p>
                            <p>viewed this information about you< br />
                            at 11:43 on 01 June 2017</p>
                        </div>
                        <div className="attributes">
                            <div className="title">Given Name(s)</div>
                            <p className="name">Mitesh</p>
                            <div className="title">Mobile Number</div>
                            <p>+447951234567</p>
                        </div>
                        
                    </Modal.Body>                    
                </Modal>
            </div>
        );
    }    
}
