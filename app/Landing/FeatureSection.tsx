import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import FormUpload from "@/components/Common/FormUpload";

const FeatureSection = () => {
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
                    htmlFor="basicpill-lastname-input"
                    className="form-label"
                  >
                    Learn More URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-lastname-input"
                    placeholder="Enter URL"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <Label htmlFor="example-text-input" className="form-Label">
                Background Color
              </Label>
              <Input
                className="form-control"
                type="text"
                id="example-text-input"
                placeholder="Enter Color linear-gradient(180deg, rgba(147, 19, 51, 0.69) 0%, #060B26 50%)"
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label
                    htmlFor="basicpill-address-input"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    id="basicpill-address-input"
                    className="form-control"
                    placeholder="Enter Description"
                    rows={2}
                  ></textarea>
                </div>
              </div>
            </div>
            <Row>
              <Col className="col-12">
                <FormUpload label="Upload Image" />
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
        <Col xs={12}>
          <div>
            <Label className="form-label">Feature Table</Label>
          </div>
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Learn More URL</th>
                      <th>Background Color</th>
                      <th>Description</th>
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

export default FeatureSection;
