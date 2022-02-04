import Friends from './Friends';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friends
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnLine={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
