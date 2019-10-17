import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import FriendList from './FriendList/FriendList';

import user from './Profile/user.json';
import statsConfig from './Stats/statsConfig.json';
import transactions from './TransactionHistory/transactions.json';
import friends from './FriendList/friends.json';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={statsConfig} />
    <TransactionHistory items={transactions} />
    <FriendList friends={friends} />
  </>
);
export default App;
