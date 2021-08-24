import s from '../FriendList/Friends.module.css';

function Friends({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={s.online}></span>
          ) : (
            <span className={s.offline}></span>
          )}
          <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Friends;
