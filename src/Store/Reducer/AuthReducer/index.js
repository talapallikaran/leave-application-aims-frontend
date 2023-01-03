import { AUTH, AUTHFAILED } from '../../ActionTypes/index';
const initialstate = {
  LoginData: [],
};

const UserLoginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
         ...action.payload,
      };

    default:
      return state;
  }
};
export default UserLoginReducer;
