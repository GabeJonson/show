import { types } from 'mobx-state-tree';
import usersStore from './users';

const createStore = types.model('Store', {
  users: types.array(usersStore),
});

export default createStore;
