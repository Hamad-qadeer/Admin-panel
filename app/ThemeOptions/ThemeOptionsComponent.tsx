import React from 'react'
import { Card, CardBody, Col, Input, Label, Row, Table } from 'reactstrap';
import GradientInput from './GradientInput';
import ColorInput from './ColorInput';

const ThemeOptionsComponent = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody className="p-4">
              {/* Group 1: Primary and Secondary Colors */}
              <div className="row mb-4">
                <ColorInput label="Primary" defaultValue="#FFCC00" />
                <ColorInput label="Secondary" defaultValue="#3A39BB" />
                <ColorInput label="Primary Text" defaultValue="#636363" />
                <ColorInput label="Secondary Text" defaultValue="#363636" />
                <ColorInput label="Meta Mask" defaultValue="#FF8F44" />
              </div>

              {/* Group 2: Background Colors and Gradients */}
              <div className="row mb-4">
                <ColorInput label="Main Background" defaultValue="#202020" />
                <ColorInput
                  label="Secondary Background"
                  defaultValue="#808080"
                />
                <ColorInput label="Primary Gradient" defaultValue="#6154DA" />
                <ColorInput
                  label="Primary Gradient Two"
                  defaultValue="#6254DA"
                />
                <ColorInput label="Secondary Gradient" defaultValue="#E59396" />
              </div>

              {/* Group 3: Linear Gradients */}
              <div className="row">
                <GradientInput
                  label="Linear Gradient Primary One"
                  defaultValue="764CE2"
                />
                <GradientInput
                  label="Linear Gradient Primary Two"
                  defaultValue="7E4CD2"
                />
                <GradientInput
                  label="Linear Gradient Secondary One"
                  defaultValue="D9B4C7"
                />
                <GradientInput
                  label="Linear Gradient Secondary Two"
                  defaultValue="BEA5C5"
                />
              </div>
              <div className='mt-5'>
                <button type="submit" className="btn btn-primary w-md">
                  Submit
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ThemeOptionsComponent