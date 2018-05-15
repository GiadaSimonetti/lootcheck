import * as constants from '../src/constants';
import * as actions from '../src/balance';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setbalance(balance)).toEqual(expectedAction);
});
