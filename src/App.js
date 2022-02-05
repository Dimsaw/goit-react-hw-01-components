import Profile from './components/profile/Profile';
import user from './data/user.json';

import FriendList from './components/friends/FriendsList';
import friends from './data/friends.json';

import Statistics from './components/statistics/Statistics';
import data from './data/statistics.json';

import TransactionHistory from './components/transactions/Transactions';
import transactions from './data/transactions.json';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
