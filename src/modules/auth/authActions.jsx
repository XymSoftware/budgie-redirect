/* eslint-disable no-unused-vars */
import { actionCreator } from 'helpers';
import { authConstants } from 'modules';
import * as api from 'modules/auth/authApi';

const authActions = {
  checkToken: (payload, callbacks) => {
    const type = authConstants.actions.CHECK_TOKEN;
    const args = { type, payload, callbacks };
    return api.checkToken(args);
  },

  createUser: (payload, callbacks) => {
    const type = authConstants.actions.CREATE_USER;
    const args = { type, payload, callbacks };
    return api.createUser(args);
  },

  updateUser: (payload, callbacks) => {
    const type = authConstants.actions.UPDATE_USER;
    const args = { type, payload, callbacks };
    return api.updateUser(args);
  },

  deleteUser: (payload, callbacks) => {
    const type = authConstants.actions.DELETE_USER;
    const args = { type, payload, callbacks };
    return api.deleteUser(args);
  },

  sendResetEmail: (payload, callbacks) => {
    const type = authConstants.actions.SEND_RESET_EMAIL;
    const args = { type, payload, callbacks };
    return api.sendResetEmail(args);
  },

  login: (payload, callbacks) => {
    const type = authConstants.actions.LOG_IN;
    const args = { type, payload, callbacks };
    return api.login(args);
  },
};

export { authActions };