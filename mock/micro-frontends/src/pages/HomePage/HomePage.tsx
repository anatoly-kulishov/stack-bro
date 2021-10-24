import React from 'react';
import './HomePage.scss';
import StepsWrapper from "../../components/StepsWrapper/StepsWrapper";

const HomePage: React.FC = () => {
    return (

        <div className="home-page-wrapper">

            <StepsWrapper/>

            <study-description></study-description>

            <frequently-asked-questions></frequently-asked-questions>

            <ask-a-question></ask-a-question>

        </div>
    )
}


export default HomePage;
