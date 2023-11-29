import React from "react";
import { Card, CardBody, Col, Label, Row, Table } from "reactstrap";
import FormUpload from "@/components/Common/FormUpload";

const GoogleFormSection = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <CardBody className="p-0">
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
                    Enter Button Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input"
                    placeholder="Enter Button Title"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    htmlFor="basicpill-firstname-input"
                    className="form-label"
                  >
                    Enter Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input"
                    placeholder="Enter Link"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    htmlFor="basicpill-firstname-input"
                    className="form-label"
                  >
                    Enter Feature Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input"
                    placeholder="Enter Feature Title"
                  />
                </div>
              </div>
            </div>
            <Row>
              <Col className="col-12">
                <FormUpload label="Feature Image" />
              </Col>
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
        <Col>
          <div>
            <Label className="form-label">Google Form Table</Label>
          </div>
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Button Title</th>
                      <th>Link</th>
                      <th>Feature Title</th>
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GoogleFormSection;
