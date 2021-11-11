import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthStatus} from '../../const';
import {User} from '../../types/user';

const getAuthStatus = (state: State): AuthStatus => state[NameSpace.user].authStatus;
const getUser = (state: State): User| null => state[NameSpace.user].user;

export {getAuthStatus, getUser};
