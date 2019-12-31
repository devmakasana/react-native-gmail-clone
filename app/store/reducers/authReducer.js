import {
  GET_AUTH_VALIDATION_ERRORS,
  GET_AUTH_RES_ERROR,
  SET_CURRENT_USER,
  SET_AUTH_LOADER,
  GET_AUTH_RES_SUCCESS,
} from '../../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {},
  resError: '',
  resSuccess: '',
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_AUTH_VALIDATION_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_AUTH_RES_ERROR:
      return {
        ...state,
        resError: action.payload,
      };
    case GET_AUTH_RES_SUCCESS:
      return {
        ...state,
        resSuccess: action.payload,
      };
    case SET_AUTH_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
