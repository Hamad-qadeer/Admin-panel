import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Input,
  Label,
} from "reactstrap";
import FormUpload from "@/components/Common/FormUpload";

const LandingComponent = () => {
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
                    Landing Title
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
                    Powered By
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basicpill-lastname-input"
                    placeholder="Enter Powered By"
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
                    Landing Description
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
            <div className="row">
              <Col xs={12}>
                <FormUpload label="Landing Background" />
              </Col>
              <Col xs={12} md={4}>
                <FormUpload label="Header Logo" />
              </Col>
              <Col xs={12} md={4}>
                <FormUpload label="Landing BackgroundSM" />
              </Col>
              <Col xs={12} md={4}>
                <FormUpload label="LandingBackground Mobile" />
              </Col>
              <Col xs={12} md={4}>
                <FormUpload label="PoweredBy Logo" />
              </Col>
              <Col xs={12} md={4}>
                <FormUpload label="Notified Icon" />
              </Col>
              <Col xs={12} md={4}>
                <FormUpload label="Staking Icon" />
              </Col>
              <div>
                <button type="submit" className="btn btn-primary w-md">
                  Submit
                </button>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </div>
  );
};

export default LandingComponent;
