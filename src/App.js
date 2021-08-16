// import logo from './logo.svg';
import './App.css';

// Task 1
import Profile from './Social-profile/Profile';
import user from './Social-profile/user.json';
// Task 2
import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/Statistics';
// Task 3
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
// Task 4
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <hr />
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>
      <hr />
      <div>
        <FriendList friends={friends} />
      </div>
      <hr />
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
