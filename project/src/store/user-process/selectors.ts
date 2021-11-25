import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthStatus} from '../../const';
import {User} from '../../types/user';

const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
const getUser = (state: State): User| null => state[NameSpace.User].user;

export {getAuthStatus, getUser};
