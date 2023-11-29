import React, { useState } from 'react'
import { Card, CardBody, Col, Label, Row, Table } from 'reactstrap';
import Check from "feather-icons-react";


const TierBenefits = () => {
    const [showInput, setShowInput] = useState({
      formCheck1: false,
      formCheck2: false,
      formCheck3: false,
      formCheck4: false,
    });

    const handleCheckboxClick = (checkboxId : any) => {
      setShowInput((prevShowInput: any) => ({
        ...prevShowInput,
        [checkboxId]: !prevShowInput[checkboxId],
      }));
    };
  return (
    <div>
      <Row>
        <Col xs={12}>
          <CardBody className="p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label
                    htmlFor="basicpill-firstname-input"
                    className="form-label"
                  >
                    Enter Tier Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input"
                    placeholder="Enter Title"
                  />
                </div>
              </div>
            </div>
            <Row>
              <Col md={5}>
                <div>
                  <h5 className="font-size-14 mb-3">
                    <i className="mdi mdi-arrow-right text-primary me-1"></i>{" "}
                    Select Tier
                  </h5>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck1"
                      onClick={() => handleCheckboxClick("formCheck1")}
                    />
                    <label className="form-check-label" htmlFor="formCheck1">
                      BRONZE
                    </label>
                    {showInput.formCheck1 && (
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Enter Amount"
                      />
                    )}
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck2"
                      onClick={() => handleCheckboxClick("formCheck2")}
                    />
                    <label className="form-check-label" htmlFor="formCheck2">
                      SILVER
                    </label>
                    {showInput.formCheck2 && (
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Enter Amount"
                      />
                    )}
                  </div>
                </div>
              </Col>
              <Col md={5} className="m-1">
                <div className="mt-4">
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck3"
                      onClick={() => handleCheckboxClick("formCheck3")}
                    />
                    <label className="form-check-label" htmlFor="formCheck3">
                      GOLD
                    </label>
                    {showInput.formCheck3 && (
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Enter Amount"
                      />
                    )}
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck4"
                      onClick={() => handleCheckboxClick("formCheck4")}
                    />
                    <label className="form-check-label" htmlFor="formCheck4">
                      DIAMOND
                    </label>
                    {showInput.formCheck4 && (
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Enter Amount"
                      />
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <Label className="form-label">Tier Benefits Table</Label>
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tier Benefits</th>
                      <th>BRONZE</th>
                      <th>SIVLER</th>
                      <th>GOLD</th>
                      <th>DIAMOND</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Minimum Staking Points</td>
                      <td>2,000</td>
                      <td>@20,000 </td>
                      <td>50,000 </td>
                      <td>200,000</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Pool Weight / Allocation Multiplier</td>
                      <td>1x</td>
                      <td>4x</td>
                      <td>10x</td>
                      <td>40x</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Social interaction required </td>
                      <td>
                        <Check icon="check" />
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default TierBenefits