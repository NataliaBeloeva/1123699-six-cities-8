import {createReducer} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const';
import {UserProcess} from '../../types/state';
import {userLogin, userLogout} from '../action';

const initialState: UserProcess = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(userLogin, (state, action) => {
      state.authStatus = AuthStatus.Auth;
      state.user = action.payload;
    })
    .addCase(userLogout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.user = null;
    });
});


export {userProcess};
