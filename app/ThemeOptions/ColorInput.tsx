import React from 'react'
import { Input, Label } from 'reactstrap';

const ColorInput = ({label, defaultValue}) => {
  return (
    <div className="col-lg-3 mb-3">
      <Label
        htmlFor={`${label.toLowerCase()}-color-input`}
        className="form-Label"
      >
        {label}
      </Label>
      <Input
        type="color"
        className="form-control form-control-color w-50"
        id={`${label.toLowerCase()}-color-input`}
        defaultValue={defaultValue}
        title={`Choose ${label.toLowerCase()} color`}
      />
    </div>
  );
}

export default ColorInput