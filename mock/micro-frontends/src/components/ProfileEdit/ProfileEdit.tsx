import { Field } from "formik";
import React, { FC } from "react";
import { Checkbox, Input, RadioButton, Select } from "@wavea/ui-kit";
import "./ProfileEdit.scss";
import { IFormikVariable } from "../../pages/Profile/ProfileInterface";

const sexVariable: IFormikVariable[] = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const handVariable: IFormikVariable[] = [
  {
    value: "right hand",
    label: "right hand",
  },
  {
    value: "left hand",
    label: "left hand",
  },
];

const fitbitVariable: IFormikVariable[] = [
  {
    value: "right hand",
    label: "right hand",
  },
  {
    value: "left hand",
    label: "left hand",
  },
];

const ProfileEdit: FC = () => {
  return (
    <div className="container">
      <div className="ProfileEditForm">
        <div className="ProfileEditFormWrapperSmall">
          <Field name="name" label="Name" type="input" component={Input} />
          <div className="ProfileEditFormWrapperUser">
            <Field name="age" label="Age" type="input" component={Input} />
            <Field
              name={"sex"}
              options={sexVariable}
              placeholder="Sex assigned at birth"
              component={Select}
            />
          </div>
        </div>
        <div className="ProfileEditFormWrapperRacial">
          <p className="ProfileEditForm__description">
            Racial identity and/or ethnicity (check all that apply)
          </p>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="RacialList"
          >
            <Field
              name="racial"
              value="Asian"
              label="Asian"
              type="checkbox"
              component={Checkbox}
            />
            <Field
              name="racial"
              value="American Indian or Alaska Native"
              label="American Indian or Alaska Native"
              type="checkbox"
              component={Checkbox}
            />
            <Field
              name="racial"
              value="Black or African American"
              label="Black or African American"
              type="checkbox"
              component={Checkbox}
            />
            <Field
              name="racial"
              value="Hispanic or Latino"
              label="Hispanic or Latino"
              type="checkbox"
              component={Checkbox}
            />
            <Field
              name="racial"
              value="Native Hawaiian or Other Pacific Islander (NHOPI)"
              label="Native Hawaiian or Other Pacific Islander (NHOPI)"
              type="checkbox"
              component={Checkbox}
            />
            <Field
              name="racial"
              value="White"
              label="White"
              type="checkbox"
              component={Checkbox}
            />
          </div>
        </div>
        <div className="ProfileEditFormWrapperSmall AddressData">
          <div className="AddressDataEmail">
            <div className="AddressDataEmailMessage EmailMessageArrow">
              We cannot let you edit your email because this is your username.
              To edit this information, please contact a member of the study
              staff.
            </div>
            <Field
              name="email"
              label="Email"
              type="input"
              component={Input}
              disabled={true}
            />
          </div>
          <Field
            name="phone"
            label="Phone Number"
            type="input"
            component={Input}
          />
          <Field
            name="address1"
            label="Address Line 1"
            type="input"
            component={Input}
          />
          <Field
            name="address2"
            label="Address Line 2"
            type="input"
            component={Input}
          />
        </div>
        <div className="ProfileEditFormWrapperSmall CitiesList">
          <Field name="city" label="City" type="input" component={Input} />
          <Field name="state" label="State" type="input" component={Input} />
          <Field name="zip" label="Zip" type="input" component={Input} />
        </div>
        <div className="ProfileEditFormWrapperSmall BedList">
          <p className="ProfileEditFormSubtitle">Bed shared with</p>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="BedListItems"
          >
            <Field
              name="bedShared"
              value="pet"
              label="pet"
              type="checkbox"
              component={Checkbox}
            />
            <Field
              name="bedShared"
              value="person(s)"
              label="person(s)"
              type="checkbox"
              component={Checkbox}
            />
          </div>
        </div>
        <div className="ProfileEditFormWrapperSmall">
          <p className="ProfileEditFormSubtitle">Hand dominance</p>
          <div className="HandsList HandsListDominance">
            {handVariable.map((hand) => (
              <Field
                key={hand.label}
                type="radio"
                value={hand.value}
                label={hand.label}
                name="hand"
                component={RadioButton}
              />
            ))}
          </div>
        </div>
        <div className="ProfileEditFormWrapperSmall">
          <p className="ProfileEditFormSubtitle">Fitbit worn on</p>
          <div className="HandsList">
            {fitbitVariable.map((hand) => (
              <Field
                key={`${hand.label} fitbit`}
                type="radio"
                value={hand.value}
                label={hand.label}
                name="fitbit"
                component={RadioButton}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
