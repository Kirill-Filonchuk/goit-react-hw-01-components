import PropTypes from 'prop-types';
import s from '../Social-profile/SocialProfile.module.css';
import DefImg from '../Social-profile/5345363.png';

function Profile({ name, tag, location, avatar, stats }) {
  // const { 'followers', 'views', 'likes'} = stats;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats['followers']}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats['views']}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats['likes']}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: DefImg,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
