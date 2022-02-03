export default function Friends({ name, avatar, isOnLine }) {
  return (
    <li className="item">
      <span className="status">{isOnLine}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
