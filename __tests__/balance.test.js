import * as constants from '../src/actions/constants';
import * as actions from '../src/actions/balance';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});
