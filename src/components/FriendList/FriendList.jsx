import PropTypes from 'prop-types';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
