import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userAvatar from '../../../assets/img/avatar.jfif';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = React.memo(props => {
    if (!props.profile)  {
        return <Preloader/>
    }
    return (
        <div className={styles.profileInfo}>
            <div className={styles.description}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userAvatar} alt={'User avatar'}/>
                <div>
                    <h3>{props.profile.fullName}</h3>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <p>Description: {props.profile.aboutMe}</p>
                    <p>Looking for job: {props.profile.lookingForAJob}</p>
                    <p>Job description: {props.profile.lookingForAJobDescription}</p>
                </div>
                <div>
                    <h4>Contacts</h4>
                    <p>Facebook: {props.profile.contacts.facebook}</p>
                    <p>Website: {props.profile.contacts.website}</p>
                    <p>VK: {props.profile.contacts.vk}</p>
                    <p>Twitter: {props.profile.contacts.twitter}</p>
                    <p>Instagram: {props.profile.contacts.instagram}</p>
                    <p>Youtube: {props.profile.contacts.youtube}</p>
                    <p>Github: {props.profile.contacts.github}</p>
                    <p>Main link: {props.profile.contacts.mainLink}</p>
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;