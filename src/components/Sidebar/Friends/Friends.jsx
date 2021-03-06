import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = React.memo((props) => {
    let friendsElements =
        props.friends.map(friend => <Friend id={friend.id}
                                            key={friend.id}
                                            name={friend.name}
                                            avatar={friend.avatar}/>)

    return <div className={styles.friends}>{friendsElements}</div>;
})

export default Friends;