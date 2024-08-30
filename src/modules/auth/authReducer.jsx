import { appConstants } from 'modules/app/appConstants';
import { authConstants } from 'modules/auth/authConstants';
import { updateLocalStorage, request } from 'helpers';
import StateManager from 'state-wrangler';

const { actions, selectors } = authConstants;
const { tokenKeyName } = appConstants;

const initial = {};

const authReducer = (initialState = initial, action = {}) => {
  const { payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case request(actions.CHECK_TOKEN).start:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case request(actions.CHECK_TOKEN).success:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.CHECK_TOKEN).complete:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case request(actions.CREATE_USER).success:
      if (payload) updateLocalStorage(tokenKeyName, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.UPDATE_USER).success:
      if (payload) updateLocalStorage(tokenKeyName, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.DELETE_USER).success:
      return state.remove(selectors.STATE_KEY_USER_INFO);

    case request(actions.SEND_RESET_EMAIL).success:
      return initialState;

    case request(actions.LOG_IN).start:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case request(actions.LOG_IN).success:
      if (payload) updateLocalStorage(tokenKeyName, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.LOG_IN).complete:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    default:
      return initialState;
  }
};

export { authReducer };