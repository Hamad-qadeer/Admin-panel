import React from 'react'
import { Card, CardBody, Col, Label, Row, Table } from 'reactstrap';

const Tiers = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <CardBody className="p-0">
            {/* import TextualInputs */}
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label
                    htmlFor="basicpill-firstname-input"
                    className="form-label"
                  >
                    Learn More Title
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
                    List Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input"
                    placeholder="Enter List Title"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    htmlFor="basicpill-firstname-input"
                    className="form-label"
                  >
                    List URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-firstname-input"
                    placeholder="Enter List URL"
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
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div>
            <Label className="form-label">Tiers Table</Label>
          </div>
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>List Title</th>
                      <th>List URL</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td className='mb-3'>
                        <button className="btn btn-primary btn-sm me-2">Edit</button>
                        <button className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
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

export default Tiers