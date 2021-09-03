import s from '../Friends.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

// function FriendListItem({ friends }) {
//   return friends.map(friend => (
//     <li className={s.item} key={friend.id}>
//       {friend.isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
//       <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
//       <p className={s.name}>{friend.name}</p>
//     </li>
//   ));
// }
