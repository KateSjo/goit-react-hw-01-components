import React from 'react';
import Profile from './components/social-profile/SocialProfile';
import socials from './social-profile.json';
import StatisticsList from './components/statistics/Statistics';
import TransactionsList from './components/transaction-history/TransactionsList';
import FriendsList from './components/friend-list/FriendList';

const App = () => {
  return (
    <div>
      <FriendsList />
      <TransactionsList />
      <StatisticsList />
      <Profile
        avatar={socials.avatar}
        name={socials.name}
        tag={socials.tag}
        location={socials.location}
        followers={socials.stats.followers}
        views={socials.stats.views}
        likes={socials.stats.likes}
      />
    </div>
  );
};

export default App;
