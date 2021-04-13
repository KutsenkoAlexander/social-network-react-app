import React, {useEffect} from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer';
import {getProfileSelector, getStatusSelector} from "../../redux/profileSelector";
import {getIsAuthSelector, getUserIdSelector} from "../../redux/authSelector";

const ProfileContainer = React.memo(
    ({authUserId, history, getUserProfile, getStatus, profile, status, updateStatus, match}) => {

    useEffect(() => {
        let userId = match.params.userId;
        if (!userId) {
            userId = authUserId;
            if (!userId) {
                history.push("/login");//redirect if user isn't auth bad practise
            }
        }
        if (userId) {
            getUserProfile(userId);
            getStatus(userId);
        }
    }, [authUserId, history, getUserProfile, getStatus, match])

    return <Profile profile={profile}
                        status={status}
                        updateStatus={updateStatus} />
});

const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    authUserId: getUserIdSelector(state),
    isAuth: getIsAuthSelector(state)
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);