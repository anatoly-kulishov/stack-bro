import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {NavHashLink} from 'react-router-hash-link';
import {Button} from '@wavea/ui-kit';
import logo from "../../assets/images/logo.svg";
import './Navbar.scss';
import {
    GlobalStoreFolders,
    GlobalStoreInterface,
    openPreScreeningModalGAC,
} from "../../globalStoreUtils";
import {GlobalStore} from "redux-micro-frontend";
import UserProfile from "../UserProfile/UserProfile";
import { Auth } from 'aws-amplify';

const scrollWidthOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({top: yCoordinate + yOffset, behavior: 'smooth'});
}

const Navbar: React.FC = () => {

    async function checkAuthUser() {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
            setIsLogin(true);
            setUser(user);
        }
    }

    useEffect(() => {
        checkAuthUser()
    }, []);

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState<any>(null)

    const globalStore = GlobalStore.Get();

    const handlePreScreeningOpen = () => {
        globalStore.DispatchGlobalAction(GlobalStoreFolders.PreScreening, openPreScreeningModalGAC())
    }

    const handlePreScreeningResult = (APIState: GlobalStoreInterface["API"]): void => { // this sholud be made internally, waiting for Create Account component global state
        if (APIState.PreScreening.result === "accepted") {
            // setAccountCreationModalOpen(true)
        }
    }
    globalStore.SubscribeToPartnerState('ContainerApp', GlobalStoreFolders.API, (handlePreScreeningResult))

    /*login*/
    const history = useHistory();

    const openLoginPage = () => {
        history.push({
            pathname: '/login'
        })
    }

    return (<>
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="navbar-brand">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar-nav-wrap">
                    <ul className="navbar-nav">
                        <div className="nav-item">
                            <NavHashLink
                                smooth
                                className="nav-link"
                                to="/home"
                                scroll={el => scrollWidthOffset(el)}
                                activeClassName="active"
                            >Home</NavHashLink>
                            {/*activeClassName="active"*/}
                        </div>
                        <div className="nav-item">
                            <NavHashLink
                                smooth
                                className="nav-link"
                                to={'/home/#studyFAQ'}
                                scroll={el => scrollWidthOffset(el)}
                            >Study FAQ</NavHashLink>
                        </div>
                        <div className="nav-item">
                            <NavHashLink
                                smooth
                                className="nav-link"
                                to={'/home/#askAquestion'}
                                scroll={el => scrollWidthOffset(el)}
                            >Ask a question</NavHashLink>
                        </div>
                        <div className="nav-item">
                            <NavHashLink
                                smooth
                                className="nav-link"
                                to={'/chars'}
                            >My Data</NavHashLink>
                        </div>
                    </ul>
                    {
                        !isLogin ?
                            <div className="navbar-buttons">
                                <Button typeButton='outline-primary' label='Check Eligibility'
                                        onClick={handlePreScreeningOpen}/>
                                <pre-screening/>
                                <account-creation/>
                                <Button typeButton='primary' label='Log in' onClick={openLoginPage}/>
                            </div>
                            :
                            <div className="navbar-buttons">
                                <UserProfile email={user?.attributes.email}/>
                            </div>
                    }
                </div>
            </nav>
        </>
    )
}
export default Navbar;
