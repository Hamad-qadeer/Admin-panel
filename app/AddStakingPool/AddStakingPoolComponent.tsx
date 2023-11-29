import {Card, CardBody, Col, Input, Label, Row} from "reactstrap";
import Link from "next/link";
import React from "react";

const AddStakingPoolComponent = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <div className="row mb-3">
                            <div className="col-6">
                                <Card>
                                    <CardBody>
                                        <div className="row col-12 mt-3 mb-3">
                                            <div className="row mb-3">
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Pool Contract Address
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Pool Contract Address"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Network Available
                                                    </Label>
                                                    <div>
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="radio"
                                                            name="formRadios"
                                                            id="formRadios1"
                                                            defaultChecked
                                                        />
                                                        <label className="form-check-label" htmlFor="formRadios1">
                                                            BSC
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Pool Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Pool Name"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Pool Logo
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Pool Logo"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Pool Website
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Pool Website"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Launchpad Point Multiplier
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Launchpad Point Multiplier"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card>
                                    <CardBody>
                                        <div className="row col-12 mt-3 mb-3">
                                            <h6 className="mb-3">Linear Options</h6>
                                            <div className="row mb-3">
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Annual Percentage Rate (365 days)
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Lock Duration (days, 0 day = flexible pool)
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Withdraw Delay Duration (days)
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <Label className="form-label">
                                                            Start Join Pool Time
                                                        </Label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <Label className="form-label">
                                                            End Join Pool Time
                                                        </Label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Total Pool Amount
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Min Stake Amount / Person
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                        Max Stake Amount / Person
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="mb-3">
                            <Link href="/StakingPools">
                                <button className="btn btn-info me-2" type="button"> Back</button>
                            </Link>
                            <Link href="/StakingPools">
                                <button className="btn btn-info me-2" type="button">Submit</button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
    
}

export default AddStakingPoolComponent;