// import logo from './logo.svg';
import '../App/App.css';

// Task 1
import Profile from '../Social-profile/Profile';
import user from '../Data/user.json';
// Task 2
import statisticalData from '../Data/statistical-data.json';
import Statistics from '../Statistics/Statistics';
// Task 3
import FriendList from '../FriendList/FriendList';
import friends from '../Data/friends.json';
// Task 4
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../Data/transactions.json';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className="container">
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>

      <div className="container">
        <FriendList friends={friends} />
      </div>

      <div className="container">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
