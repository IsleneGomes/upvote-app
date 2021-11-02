import mock from '../utils/mock';

mock.onPost('/api/sign-in').reply(200, {
  id: 1,
  username: 'Islene',
  password: 'string',
});
