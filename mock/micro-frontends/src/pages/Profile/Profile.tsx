import React, { FC, useState } from "react";
import { Button } from "@wavea/ui-kit";
import { Formik } from "formik";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import { useTypedSelector } from "../../state";
import { IFormik } from "./ProfileInterface";
import "./Profile.scss";
import { validationSchemaProfile } from "./ProfileValidationSchema";

const data = {
  age: 32,
  sex: "Male",
  racial: ["Asian"],
  bedShared: ["pet"],
  handDominance: "right hand",
  fitbitWorn: "left hand",
  city: "Boston",
  addressLine1: "1 Beacon Street, 33rd Floor, 7A",
  state: "MA",
  zip: "02108",
};

const Profile: FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const currentUser = useTypedSelector((state) => state.user);

  const initialValues: IFormik = {
    name: currentUser?.name!,
    age: data.age,
    sex: data.sex,
    racial: data.racial,
    email: currentUser?.email!,
    phone: currentUser?.phone_number!,
    address1: data.addressLine1,
    address2: "",
    city: data.city,
    state: data.state,
    zip: data.zip,
    bedShared: data.bedShared,
    hand: data.handDominance,
    fitbit: data.fitbitWorn,
  };

  const handleEdit = (): void => {
    setIsEdit(!isEdit);
  };

  const onSubmitHandler = (): void => {};

  const profileName: JSX.Element = (
    <h2 className="ProfileHeaderUserName">{currentUser?.name}</h2>
  );

  return (
    <div className="ProfileMcr">
      {!isEdit ? (
        <>
          <div className="container">
            <div className="ProfileHeader">
              {profileName}
              <div className="ProfileHeaderButtons">
                <Button
                  onClick={handleEdit}
                  typeButton="outline-primary"
                  label="Edit profile"
                  type="button"
                  isLarge
                />
              </div>
            </div>
          </div>
          <div className="ProfileDivider" />
          <ProfileInfo
            age={data.age}
            sex={data.sex}
            racial={data.racial}
            email={currentUser?.email!}
            phone={currentUser?.phone_number!}
            address1={data.addressLine1}
            bedShared={data.bedShared}
            hand={data.handDominance}
            fitbit={data.fitbitWorn}
          />
        </>
      ) : (
        <>
          <Formik
            validateOnMount
            validateOnChange
            initialValues={initialValues}
            validationSchema={validationSchemaProfile}
            onSubmit={onSubmitHandler}
          >
            {(props) => {
              const { handleSubmit, isValid } = props;
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className="container">
                      <div className="ProfileHeader ProfileHeaderEdit">
                        {profileName}
                        <div className="ProfileHeaderButtons">
                          <Button
                            onClick={handleEdit}
                            typeButton="outline-secondary"
                            label="Cancel"
                            type="button"
                            isLarge
                          />
                          <Button
                            typeButton="primary"
                            label="Save"
                            type="submit"
                            isLarge
                            disabled={!isValid}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ProfileDivider" />
                    <ProfileEdit />
                  </form>
                </>
              );
            }}
          </Formik>
        </>
      )}
    </div>
  );
};

export default Profile;
