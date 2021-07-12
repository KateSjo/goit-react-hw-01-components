import React from 'react';
import Friends from '../../friends.json';
import FriendsCard from './FriendListCard';
import styles from './FriendList.module.css';

const FriendsList = () => (
  <ul className={styles.friend__list}>
    {Friends.map(Friend => (
      <FriendsCard
        key={Friend.id}
        avatar={Friend.avatar}
        name={Friend.name}
        isOnline={Friend.isOnline}
      />
    ))}
  </ul>
);
export default FriendsList;
