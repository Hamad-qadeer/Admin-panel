import React from "react";
import { Card, CardBody, CardHeader, Col, Label, Row, Table } from "reactstrap";
import FormEditor from "@/components/Common/FormEditor";

const TermsOfServiceComponent = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody className="p-4">
              {/* import TextualInputs */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      htmlFor="basicpill-firstname-input"
                      className="form-label"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Enter Title"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      htmlFor="basicpill-firstname-input"
                      className="form-label"
                    >
                      Last Updated
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Enter Last Update"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label
                      htmlFor="basicpill-address-input"
                      className="form-label"
                    >
                      Agreement
                    </label>
                    <textarea
                      id="basicpill-address-input"
                      className="form-control"
                      placeholder="Enter Agreement"
                      rows={2}
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h4 className="card-title mb-1">Enter Paragraph</h4>
                </div>
                <FormEditor />
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-md mt-3">
                  Submit
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Label>Terms of Service Table</Label>
          </div>
          <Card>
            <CardBody>
              <div>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Last Updated</th>
                        <th>Agreement</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>
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
};

export default TermsOfServiceComponent;
