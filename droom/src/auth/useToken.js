// Imports LOGIN_SUCCESS from actions, to use this helper function
// as middleware to check authentication
import { LOGIN_SUCCESS } from '../../store/actions/';
// useToken thunk that detects LOGIN_SUCCESS action condition, and triggers a setItem
// function that saves the action.payload.token, as token.
const useToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload.token);
    localStorage.setItem('id', action.payload.id);
  }
  next(action);
};
export default useToken;
