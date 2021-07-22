import React, {memo} from 'react';
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import classes from "./myFriends.module.scss"
import {getFriends} from "../../../store/selectors/users-selectors";

type PathParamsType = {
    userId: string | undefined
}

const MyFriends: React.FC<RouteComponentProps<PathParamsType>> = props => {
    const friends = useSelector(getFriends);

    return (
        <ErrorBoundary>
            <div className="default-box p-3 mt-3">
                <strong>Friends</strong>
                <ul className={classes.myFriends}>
                    {friends.map(friend => (
                        <li key={friend.id}>
                            <NavLink to={`/${friend.id}`}>
                                {friend.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </ErrorBoundary>
    );
}

export default withRouter(memo(MyFriends));
