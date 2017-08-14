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
        
        if(type === "application") {
            const bgColor = data.application.appearance['bg-color'];        
            const bgImg = data.application.appearance['bg-img'];
            const bgLogo = data.application.appearance['bg-logo'];
            let bg = "";

            if(typeof bgImg !== 'undefined') {
                bg = bgImg;
            } else if (typeof bgLogo !== 'undefined') {
                bg = bgLogo;
            }

            var modalHeadeerStyle = {
                backgroundColor: bgColor,
                backgroundImage: 'url("'+bg+'")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center'
            }    
        } 
        
        const timeStamp = data.transaction['unix-timestamp'];
        const attributes = data.transaction.attributes;

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
                            <p>{ type !== "application" ? null : "viewed this information about you" } 
                            <br />at {moment.unix(timeStamp).format('HH:mm [on] DD MMMM YYYY')}</p>
                        </div>
                        <div className="attributes">
                            {attributes.map(items => {                                
                                {Object.keys(items).map((key) => {
                                    console.log(key, items[key]);
                                })}
                            })}
                            <p>I have console logged the attrobutes due to lack of time</p>
                        </div>
                        
                    </Modal.Body>                    
                </Modal>
            </div>
        );
    }    
}
