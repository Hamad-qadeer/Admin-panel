import React from 'react'
import { Input, Label } from 'reactstrap';

const GradientInput = ({label, defaultValue}) => {
  return (
    <div className="col-lg-3 mb-3">
      <Label
        htmlFor={`${label.toLowerCase()}-gradient-input`}
        className="form-Label"
      >
        {label}
      </Label>
      <Input
        type="color"
        className="form-control form-control-color w-50"
        id={`${label.toLowerCase()}-gradient-input`}
        defaultValue={defaultValue}
        placeholder="Enter gradient colors"
        title={`Choose ${label.toLowerCase()} colors`}
      />
    </div>
  );
}

export default GradientInput