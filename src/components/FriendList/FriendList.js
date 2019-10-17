import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={
            friend.isOnline ? styles.userIsActiv : styles.userIsNotActiv
          }
        />
        <img className="avatar" src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
