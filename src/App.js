import Profile from './components/profile/Profile';
import user from './data/user.json';

import FriendList from './components/friends/FriendsList';
import friends from './data/friends.json';

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

      <FriendList friends={friends} />
    </div>
  );
}
