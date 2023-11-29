import {Card, CardBody, Col, Input, Label, Row} from "reactstrap";
import Link from "next/link";
import React from "react";

const AddAdminComponent = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <div className="row col-12 mt-3 mb-3">
                            <div className="row mb-3">
                                <div className="col-6 mb-3">
                                    <Label className="form-label">
                                        Username
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="col-6 mb-3">
                                    <Label className="form-label">
                                        Email
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 mb-3">
                                    <Label className="form-label">
                                        First Name
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-6 mb-3">
                                    <Label className="form-label">
                                        Last Name
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 mb-3">
                                    <Label className="form-label">
                                        Wallet Address
                                    </Label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Wallet Address"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/ListAdmin">
                                <button className="btn btn-info me-2" type="button"> Back</button>
                            </Link>
                            <Link href="/ListAdmin">
                                <button className="btn btn-info me-2" type="button">Submit</button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
    
}

export default AddAdminComponent;