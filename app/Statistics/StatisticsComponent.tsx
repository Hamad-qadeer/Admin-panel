import {Card, CardBody, CardHeader, Col, Input, Label, Row} from "reactstrap";
import React from "react";

const StatisticsComponent = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <div className="d-flex mb-3">
                            <div className="d-flex flex-column mb-3 me-3">
                                <Label className="form-label">
                                    Number Project
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="11"
                                />
                            </div>
                            <div className="d-flex flex-column mb-3 me-3">
                                <Label className="form-label">
                                    Fund Raised
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="4"
                                />
                            </div>
                            <div className="d-flex flex-column mb-3 me-3">
                                <Label className="form-label">
                                    ATH AVG ROI
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="1"
                                />
                            </div>
                            <div className="d-flex flex-column mb-3 me-3">
                                <Label className="form-label">
                                    C-Supply Locked
                                </Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Please enter a number"
                                />
                            </div>
                        </div>
                        <button className="btn btn-info">Update</button>
                        
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default StatisticsComponent;