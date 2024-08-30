import _ from 'lodash';

const { VITE_APP_NAME } = process.env;

const appConstants = {
  actions: {
    SET_THEME: 'modules/app/SET_THEME',
    SET_BANNER_CONTENT: 'modules/app/SET_BANNER_CONTENT',
    ADD_NOTIFICATION: 'modules/app/ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'modules/app/REMOVE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'modules/app/CLEAR_NOTIFICATIONS',
    SET_MODAL_CONTENT: 'modules/app/SET_MODAL_CONTENT',
  },

  selectors: {
    STATE_KEY_SELECTED_THEME: 'selectedTheme',
    STATE_KEY_BANNER_CONTENT: 'bannerContent',
    STATE_KEY_NOTIFICATIONS: 'notifications',
    STATE_KEY_MODAL_CONTENT: 'modalContent',
  },

  themes: {
    light: 'light',
    dark: 'dark',
  },

  messageTypes: {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
    loading: 'loading',
  },

  appName: _.camelCase(VITE_APP_NAME),
  tokenKeyName: 'token',
  textWidth: 32,
  layoutWidth: 112,
};

export { appConstants };