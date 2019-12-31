import {
  GET_AUTH_VALIDATION_ERRORS,
  GET_AUTH_RES_ERROR,
  SET_CURRENT_USER,
  SET_AUTH_LOADER,
  GET_AUTH_RES_SUCCESS,
} from './types';

// Set logged in user
export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload: payload,
  };
};

/**
 * @desc Set Auth Validation Errors
 */
export const setAuthValidationErrors = payload => {
  return {
    type: GET_AUTH_VALIDATION_ERRORS,
    payload: payload,
  };
};

/**
 * @desc Set Auth Response Errors
 */
export const setAuthResponseError = payload => {
  return {
    type: GET_AUTH_RES_ERROR,
    payload: payload,
  };
};

/**
 * @desc Set Auth Response Success
 */
export const setAuthResponseSuccess = payload => {
  return {
    type: GET_AUTH_RES_SUCCESS,
    payload: payload,
  };
};

/**
 * @desc Set Auth Loader
 */
export const setAuthLoader = payload => {
  return {
    type: SET_AUTH_LOADER,
    payload: payload,
  };
};
