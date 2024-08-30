import { actionCreator } from 'helpers';
import { appConstants } from 'modules';

const appActions = {
  setTheme: payload => actionCreator(appConstants.actions.SET_THEME, payload),
  setBannerContent: payload => actionCreator(appConstants.actions.SET_BANNER_CONTENT, payload),
  addNotification: payload => actionCreator(appConstants.actions.ADD_NOTIFICATION, payload),
  removeNotification: payload => actionCreator(appConstants.actions.REMOVE_NOTIFICATION, payload),
  clearNotifications: () => actionCreator(appConstants.actions.CLEAR_NOTIFICATIONS),
  setModalContent: payload => actionCreator(appConstants.actions.SET_MODAL_CONTENT, payload),
};

export { appActions };