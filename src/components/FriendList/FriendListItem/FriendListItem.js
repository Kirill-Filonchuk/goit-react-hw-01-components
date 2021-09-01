import PropTypes from 'prop-types';
import s from '../Friends.module.css';

function FriendListItem({ friends }) {
  return friends.map(friend => (
    <li className={s.item} key={friend.id}>
      {friend.isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
      <img className={s.avatar} src={friend.avatar} alt={friend.name} width="48" />
      <p className={s.name}>{friend.name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default FriendListItem;
