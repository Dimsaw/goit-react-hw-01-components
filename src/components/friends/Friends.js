import PropTypes from 'prop-types';

const FriendListItem = ({ name, avatar, isOnLine }) => {
  return (
    <li className="item">
      <span className="status" style={{ color: isOnLine ? 'green' : 'red' }}>
        {isOnLine}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnLine: PropTypes.bool.isRequired,
};

export default FriendListItem;
