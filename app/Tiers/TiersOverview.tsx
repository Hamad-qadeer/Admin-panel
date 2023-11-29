import React from "react";
import { Card, CardBody, Col, Label, Row, Table } from "reactstrap";
import FormUpload from "@/components/Common/FormUpload";

const TiersOverview = () => {
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
            <div className="col-lg-12 pe-0">
              <div className="mb-3">
                <label htmlFor="basicpill-address-input" className="form-label">
                  Tier Description
                </label>
                <textarea
                  id="basicpill-address-input"
                  className="form-control"
                  placeholder="Enter Description"
                  rows={2}
                ></textarea>
              </div>
            </div>
            <Row>
              <FormUpload label="Tier Icon" />
            </Row>
            <div>
              <button type="submit" className="btn btn-primary w-md">
                Submit
              </button>
            </div>
          </CardBody>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <Label className="form-label">Tiers Overview Table</Label>
          <Card>
            <CardBody>
              <div>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Tier Descrption</th>
                        <th>Staking Info</th>
                        <th>Staking Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
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
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
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

export default TiersOverview;
