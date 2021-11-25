import {AuthStatus} from '../../const';
import {fakeUserFromAdapter} from '../../utils/mocks';
import {userLogin, userLogout} from '../action';
import {userProcess} from './user-process';

describe('Reducer: userProcess', () => {

  it('without additional parameters should return initial state', () => {
    expect(userProcess(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authStatus: AuthStatus.Unknown,
        user: null,
      });
  });

  it('should update authStatus to "AUTH" and add user', () => {
    const state = {
      authStatus: AuthStatus.Unknown,
      user: null,
    };
    expect(userProcess(state, userLogin(fakeUserFromAdapter)))
      .toEqual({
        authStatus: AuthStatus.Auth,
        user: fakeUserFromAdapter,
      });
  });

  it('should update authStatus to "NOAUTH" and delete user', () => {
    const state = {
      authStatus: AuthStatus.Auth,
      user: fakeUserFromAdapter,
    };
    expect(userProcess(state, userLogout()))
      .toEqual({
        authStatus: AuthStatus.NoAuth,
        user: null,
      });
  });

});

