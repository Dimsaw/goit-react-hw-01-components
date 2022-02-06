import PropTypes from 'prop-types';
import s from './Friends.module.css';

const FriendListItem = ({ name, avatar, isOnLine }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnLine ? 'green' : 'red' }}
      >
        {isOnLine}
      </span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnLine: PropTypes.bool.isRequired,
};

export default FriendListItem;
