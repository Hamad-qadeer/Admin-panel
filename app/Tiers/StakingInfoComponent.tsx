import React from 'react'
import { Card, CardBody, Col, Label, Row, Table } from 'reactstrap';

const StakingInfoComponent = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <CardBody className="p-0">
            {/* import TextualInputs */}
            <div className="col-lg-12">
              <div className="mb-3">
                <label
                  htmlFor="basicpill-firstname-input"
                  className="form-label"
                >
                  Staking Info
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input"
                  placeholder="Enter Info"
                />
              </div>
            </div>
            <div className="col-lg-12 pe-0">
              <div className="mb-3">
                <label htmlFor="basicpill-address-input" className="form-label">
                  Staking Description
                </label>
                <textarea
                  id="basicpill-address-input"
                  className="form-control"
                  placeholder="Enter Description"
                  rows={2}
                ></textarea>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <Label className="form-label">Staing Info Table</Label>
          <Card>
            <CardBody>
              <div>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Staking Info</th>
                        <th>Staking Descrption</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default StakingInfoComponent