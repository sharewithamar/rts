import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import UserRefSearch from './refs/UserSearch';

import EventComponent from './events/EventComponent';
const App = () => {
  return (
    <div>
      <EventComponent />
      <hr />
      <UserSearch />
      <hr />
      <GuestList />
      <hr />
      <UserRefSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
