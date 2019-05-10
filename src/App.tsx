import React from 'react';
import { onSnapshot } from 'mobx-state-tree';
import { UsersList } from 'Page/UsersList';
import store from 'Models/store';

const App: React.FC = () => {
  onSnapshot(store, snapshot => {
    console.dir(snapshot);
  });

  console.log(store.users[0]);
  return <UsersList />;
};

export default App;
