import React from 'react';
import {useHistory} from "react-router-dom";
import {Space, Card} from 'antd';
import {useSelector} from "react-redux";
import GoBack from '../common/GoBack';
import {getAppTheme} from "../../store/selectors/app-selectors";
import FileField from "../common/FileField";

const Sandbox: React.FC = () => {
  const appTheme = useSelector(getAppTheme);
  const history = useHistory();

  return (
    <section className={`default-box default-box--${appTheme} p-3`}>
      <Space direction="horizontal" align="start">
        <Card title="Back Button" style={{width: 200}}>
          <GoBack history={history}/>
        </Card>
        <Card title="File Field" style={{width: 200}}>
          <FileField save={() => console.log('save()')}/>
        </Card>
      </Space>
    </section>
  );
}

export default Sandbox;
