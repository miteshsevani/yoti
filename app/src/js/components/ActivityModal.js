import React from "react";
import { Grid, Row, Col, Button, Modal } from 'react-bootstrap';
import moment from "moment";
import ActivityAttribute from './ActivityAttribute';

export default class ActivityModal extends React.Component {
    constructor() {
        super();        
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
        
        {/* If receipt type is application, set the background css properties for the modal header */}
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
                    {/* Render modal header if receipt type is not 'share' */}
                    {type !== "share" ? <Modal.Header style={modalHeadeerStyle}></Modal.Header> : null }
                    <Modal.Body>
                        <div className="information">
                            <div className="icon-selfie">
                                {/* if receipt ype if 'application' show selfie of ogged in user, otherwise show a placeholder selfie */}
                                {type==='application' ? <img className="selfie" src="img/selfie.png" /> : <div className="icon-user_selfie_ph_medium"></div> }
                                <div className="icon-logo_circle"></div>
                            </div>
                            
                            <div className="icon-receipt_confirmed"></div>
                            {/* Conditional logic depending on type of receipt */}
                            <h6> { type !== "application" ? "Yoti Shared" : "Simple Yoti SDK App" }</h6>
                            <div>{ type !== "application" ? null : "viewed this information about you" }</div>
                            <div>at {moment.unix(timeStamp).format('HH:mm [on] DD MMMM YYYY')}</div>
                        </div>
                        <div className="attributes">           
                            {/* Loop through attributes and pass in the object key and value to the ActivityAttribute component */}                 
                            {attributes.map((items, index) => {
                                return (
                                    <div key={index}>
                                        {Object.keys(items).map((key) => {
                                            {/* Render each attribute */}
                                            return (
                                                <ActivityAttribute key={key + index} title={key} item={items[key]} />
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </Modal.Body>                    
                </Modal>
            </div>
        );
    }    
}
