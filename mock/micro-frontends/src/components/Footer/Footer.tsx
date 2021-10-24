import React from 'react';
import './Footer.scss';
import logo from "../../assets/images/Logo-b-w.svg";

interface IFooterProps {
}

const Footer: React.FC<IFooterProps> = (props) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="company-info">
                        <div className="logo"><img src={logo} alt="logo" /></div>

                        <div className="site">www.cohenveteransbioscience.org</div>
                    </div>
                    <div className="contact-info">
                        <div className="phone"><span>+1</span> 750 123-4567</div>
                        <div className="schedule">Available 24/7</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
