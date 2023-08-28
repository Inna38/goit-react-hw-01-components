import classNames from 'classnames/bind';

import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
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
