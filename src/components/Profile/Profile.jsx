import PropTypes from 'prop-types';
import css from './Profile.module.css';
import classNames from 'classnames/bind';

export const Profile = ({ user }) => {
  const {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} width="260" alt={username} className={css.avatar} />
        <p className={classNames(css.name, css.text)}>{username}</p>
        <p className={classNames(css.tag, css.text)}>{tag}</p>
        <p className={classNames(css.location, css.text)}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
