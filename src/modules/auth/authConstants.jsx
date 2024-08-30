
const authConstants = {
  actions: {
    CHECK_TOKEN: 'modules/auth/CHECK_TOKEN',
    CREATE_USER: 'modules/auth/CREATE_USER',
    UPDATE_USER: 'modules/auth/UPDATE_USER',
    DELETE_USER: 'modules/auth/DELETE_USER',
    SEND_RESET_EMAIL: 'modules/auth/SEND_RESET_EMAIL',
    LOG_IN: 'modules/auth/LOG_IN',
  },

  selectors: {
    STATE_KEY_USER_INFO: 'userInfo',
    STATE_KEY_USER_INFO_LOADING: 'userInfoLoading',
  },
};

export { authConstants };