import React from 'react';
import Profile from './components/social-profile/SocialProfile';
import socials from './social-profile.json';
import StatisticsList from './components/statistics/Statistics';
import TransactionsList from './components/transaction-history/TransactionsList';
import FriendsList from './components/friend-list/FriendList';
import statisticalData from './statistical-data.json';
import TransactionsData from './transactions.json';
import Friends from './friends.json';

const App = () => {
  return (
    <div>
      <FriendsList friends={Friends} />
      <TransactionsList data={TransactionsData} />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <Profile
        avatar={socials.avatar}
        name={socials.name}
        tag={socials.tag}
        location={socials.location}
        stats={socials.stats}
      />
    </div>
  );
};

export default App;
