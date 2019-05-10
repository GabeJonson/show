import createStore from './createStore';

const store = createStore.create({
  users: [
    {
      userName: 'Gage',
      userBirth: '31/07/1988',
    },
  ],
});

export default store;
