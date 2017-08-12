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
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
  }
}
