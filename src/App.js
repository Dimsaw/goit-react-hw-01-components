import Profile from './components/Profile';
import user from './data/user.json';

import Friends from './components/Frienfs';
import friends from './data/friends.json';

const total = friends[2];

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Friends
        name={total.name}
        avatar={total.avatar}
        isOnLine={total.isOnline}
      />
    </div>
  );
}
