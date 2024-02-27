import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const EventDetailsPopup = (props) => {
    return (  
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered="true">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Event Combo Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                    <Col xs={6} md={4}>
                        <div className="data-block">
                            <div className="title">Data Account ID</div>
                            <div>{props.dataAccountID}</div>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="data-block">
                            <div className="title">Season</div>
                            <div>{props.season}</div>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="data-block">
                            <div className="title">Combo Code</div>
                            <div>{props.combo}</div>
                        </div>
                    </Col>
                    </Row>
        
                    <Row>
                        <Col xs={6} md={4}>
                            <div className="data-block">
                                <div className="title">Event Start Date</div>
                                {props.eventStartDate}
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="data-block">
                                <div className="title">Event End Date</div>
                                {props.eventEndDate}
                            </div>
                            
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="data-block">
                                <div className="title">Event Status</div>
                                {props.status}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default EventDetailsPopup;