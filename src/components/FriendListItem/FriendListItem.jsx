import classNames from 'classnames/bind';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={classNames(
          css.status,
          isOnline ? css.isOnline : css.isOffline
        )}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
