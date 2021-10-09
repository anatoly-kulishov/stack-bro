import React, {FC, memo} from "react";
import "./RadioButtons.scss";
import {Field} from "formik";

type ChoiceButtonsPropsType = {
  name: string,
  data: {
    labels: [string, string],
    values: [string, string],
    flag: boolean
  },
  handleChange: (values: any) => void,
}

const RadioButtons: FC<ChoiceButtonsPropsType> = ({data, name, handleChange}) => {
  return (
    <label className="radio-buttons btn-group">
      <div className={`btn ${!data.flag ? 'btn-primary' : 'btn-outline-primary'}`}>
        {data.labels[0]}
      </div>
      <Field className="d-none" name={`${name}.flag`} type="checkbox" onChange={handleChange}/>
      <div className={`btn ${data.flag ? 'btn-primary' : 'btn-outline-primary'}`}>
        {data.labels[1]}
      </div>
    </label>
  )
}

export default memo(RadioButtons);