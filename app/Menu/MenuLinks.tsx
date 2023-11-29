import React from "react";
import { Card, CardBody, Col, Label, Row, Table } from "reactstrap";
import FormUpload from "@/components/Common/FormUpload";

const MenuLinks = () => {
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
                      Enter Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      htmlFor="basicpill-firstname-input"
                      className="form-label"
                    >
                      Enter URL
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Enter URL"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-lg-4">
                    <Label className="form-Label">Parent Menu</Label>
                    <select className="form-select">
                      <option>Select</option>
                      <option>Launchpad</option>
                      <option>Staking</option>
                      <option>Learn</option>
                    </select>
                  </div>
                  <div className="form-check form-switch mt-3" dir="ltr">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitch1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customSwitch1">
                      Active
                    </label>
                  </div>
                </div>
              </div>
              <Col xs={12}>
                <FormUpload label="Upload Menu Icon" />
              </Col>
              <div>
                <button type="submit" className="btn btn-primary w-md">
                  Submit
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <Label className="form-label">Menu Table</Label>
          <Card>
            <CardBody>
              <div>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Menu Item</th>
                        <th>Active</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>1</td>
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
                        <td>0</td>
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
                        <td>0</td>
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

export default MenuLinks;
