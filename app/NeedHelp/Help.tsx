import React from 'react'
import { Card, CardBody, CardHeader, Col, Label, Row, Table } from 'reactstrap';

const Help = () => {
  return (
    <React.Fragment>
      <div>
        <Col xs={12}>
          <Card>
            <CardBody className="p-4">
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
                      Support Email Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Support Email Title"
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
                      Support Email Link
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
                      Support Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label
                      htmlFor="basicpill-address-input"
                      className="form-label"
                    >
                      Enter Description
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
              <div className="mb-3">
                <div className="col-lg-4">
                  <Label className="form-Label">Help List</Label>
                  <select className="form-select">
                    <option>Select</option>
                    <option>Guide</option>
                    <option>FAQ</option>
                  </select>
                </div>
              </div>
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
                      Help Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basicpill-firstname-input"
                      placeholder="Enter Link"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-md">
                  Submit
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Row>
          <Col>
          <Label>Need Help Table</Label>
            <Card>
              <CardBody>
                <div className="table-responsive">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Support Email Title</th>
                        <th>Support Email Link</th>
                        <th>Support Email</th>
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
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
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
    </React.Fragment>
  );
}

export default Help