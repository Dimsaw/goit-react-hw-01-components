import PropTypes from 'prop-types';

const Friends = ({ name, avatar, isOnLine }) => {
  return (
    <li className="item">
      <span className="status">{isOnLine}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnLine: PropTypes.bool.isRequired,
};

export default Friends;
