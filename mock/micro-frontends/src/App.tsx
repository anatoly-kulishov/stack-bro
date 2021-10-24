import React, {useEffect} from 'react';
import {Header} from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {Redirect, Route, Switch} from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import FullStudyDescription from './pages/FullStudyDescription/FullStudyDescription';
import FrequentlyAskedQuestions from './pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import LoginPage from './pages/LoginPage/LoginPage';
import {useLocation} from 'react-router';
import MyDataPage from './pages/MyDataPage';
import {useActions} from "./state";
import {CognitoUser, UserStepEnum} from "./state/types";
import {Auth} from "aws-amplify";
import Profile from "./pages/Profile/Profile";

function App() {
    const {setUserAC} = useActions();
    async function checkAuthUser() {
        try {
            const cognitoUser: CognitoUser | null = await Auth.currentAuthenticatedUser();
            if (cognitoUser) {
                setUserAC({...cognitoUser.attributes, step: UserStepEnum.INFORMED_CONSENT })
            }
        } catch (e) {
            setUserAC(null)
        }
    }
    useEffect(() => {
        checkAuthUser()
    }, []);

    let location = useLocation();
    const isLoginPage = location.pathname.includes('/login');

    //Add comment to prod

    return (<>

            {!isLoginPage && <Header/>}

            <div className={`${!isLoginPage ? 'main-wrap' : ''}`}>
                <ScrollToTop>
                    <Switch>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/study-description" component={FullStudyDescription}/>
                        <Route path="/frequently-asked-questions" component={FrequentlyAskedQuestions}/>
                        <Route path="/my-data" component={MyDataPage}/>
                        <Route path="/profile" component={Profile}/>
                        <Route render={() => <Redirect to="/home"/>}/>
                    </Switch>
                </ScrollToTop>
            </div>

            {!isLoginPage && <Footer/>}
        </>
    );
}

export default App;