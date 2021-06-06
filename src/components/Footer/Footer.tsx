import React from 'react';
import {Layout} from 'antd';

const Footer: React.FC = () => {
    const {Footer} = Layout;

    return (
        <Footer style={{textAlign: 'center', backgroundColor: "#eee"}}>
            <small>© Kulishov Anatoly</small>
        </Footer>
    )
};

export default Footer;