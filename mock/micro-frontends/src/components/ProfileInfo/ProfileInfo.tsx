import React, { FC } from "react";
import "./ProfileInfo.scss";
import { IProfileInfoProps } from "../../pages/Profile/ProfileInterface";

const ProfileInfo: FC<IProfileInfoProps> = ({
  age,
  sex,
  racial,
  email,
  phone,
  address1,
  bedShared,
  hand,
  fitbit,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <table className="ProfileMcrData TableInfo">
            <tbody>
              <tr>
                <td className="ProfileMcrDataTitle">Info:</td>
                <td>
                  {age} / {sex} / {racial}
                </td>
              </tr>
              <tr>
                <td className="ProfileMcrDataTitle">Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td className="ProfileMcrDataTitle">Phone:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td className="ProfileMcrDataTitle">Address:</td>
                <td>{address1}</td>
              </tr>
            </tbody>
          </table>
          <table className="ProfileMcrData TableData">
            <tbody>
              <tr>
                <td className="ProfileMcrDataTitle">Bed shared with:</td>
                <td>{bedShared}</td>
              </tr>
              <tr>
                <td className="ProfileMcrDataTitle">Hand dominance:</td>
                <td>{hand}</td>
              </tr>
              <tr>
                <td className="ProfileMcrDataTitle">Fitbit worn on:</td>
                <td>{fitbit}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-3">
          <div className="ProfileMcrSubForm">
            <h4 className="ProfileMcrSubFormTitle">Submitted forms</h4>
            <p className="ProfileMcrSubFormSubtitle">Informed Consent</p>
            <p className="ProfileMcrSubFormFileSize">(PDF, 500kb)</p>
            <a
              className="ProfileMcrSubFormLink"
              target="_blank"
              rel="noreferrer"
              href="http://www.africau.edu/images/default/sample.pdf"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
