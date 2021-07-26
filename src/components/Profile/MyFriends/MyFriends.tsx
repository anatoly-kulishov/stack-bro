import React, {memo} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import classes from "./myFriends.module.scss"
import {getFriends} from "../../../store/selectors/users-selectors";
import Friend from "./Friend/Friend";

type PathParamsType = {
    userId: string | undefined
}

const MyFriends: React.FC<RouteComponentProps<PathParamsType>> = props => {
    const friends = useSelector(getFriends);

    return (
        <ErrorBoundary>
            <div className="default-box p-3 mt-3">
                <div className={classes.boxTitle}>Friends ({friends.length})</div>
                <ul className={classes.myFriends}>
                    {friends.map(friend => (
                        <Friend key={friend.id} data={friend}/>
                    ))}
                </ul>
            </div>
        </ErrorBoundary>
    );
}

export default withRouter(memo(MyFriends));
