import { appConstants } from 'modules';
import { updateLocalStorage, getLocalStorageSetting, notificationExists } from 'helpers/utilityHelpers';
import StateManager from 'state-wrangler';

const { actions, selectors, themes } = appConstants;
const savedTheme = getLocalStorageSetting(selectors.STATE_KEY_SELECTED_THEME);

const initial = {
  [selectors.STATE_KEY_SELECTED_THEME]: savedTheme || themes.light,
  [selectors.STATE_KEY_NOTIFICATIONS]: [],
  [selectors.STATE_KEY_BANNER_CONTENT]: 'Welcome to your new app!',
  [selectors.STATE_KEY_MODAL_CONTENT]: null,
};

const appReducer = (initialState = initial, action = {}) => {
  const { payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case actions.SET_THEME:
      updateLocalStorage(selectors.STATE_KEY_SELECTED_THEME, payload);
      return state.update(selectors.STATE_KEY_SELECTED_THEME, payload);

    case actions.SET_BANNER_CONTENT:
      return state.add(selectors.STATE_KEY_BANNER_CONTENT, payload);

    case actions.ADD_NOTIFICATION:
      return !notificationExists(state, payload, selectors.STATE_KEY_NOTIFICATIONS)
        ? state.add(selectors.STATE_KEY_NOTIFICATIONS, payload)
        : initialState;

    case actions.REMOVE_NOTIFICATION:
      return state.remove(selectors.STATE_KEY_NOTIFICATIONS, payload);

    case actions.CLEAR_NOTIFICATIONS:
      return state.update(selectors.STATE_KEY_NOTIFICATIONS, []);

    case actions.SET_MODAL_CONTENT:
      return state.update(selectors.STATE_KEY_MODAL_CONTENT, payload);

    default:
      return initialState;
  }
};

export { appReducer };