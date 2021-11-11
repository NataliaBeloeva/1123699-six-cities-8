import {AuthStatus} from '../../const';
import {Actions, ActionType} from '../../types/action';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.UserLogin:
      return {...state, user: action.payload, authStatus: AuthStatus.Auth};
    case ActionType.UserLogout:
      return {...state, user: null, authStatus: AuthStatus.NoAuth};
    default:
      return state;
  }
};

export {userProcess};
