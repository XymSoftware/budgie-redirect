import { appConstants } from 'modules';
import _ from 'lodash';

export const getColor = (props, key, fallback) => {
  const { theme, selectedTheme } = props;

  if (theme && selectedTheme) {
    const colors = theme.modes[selectedTheme];
    return colors[key];
  }

  return fallback;
};

export const updateLocalStorage = (key, value) => {
  if (key && value) {
    const appName = appConstants.appName;
    const existingSettings = JSON.parse(localStorage.getItem(appName));
    const newSettings = { ...existingSettings, [key]: value };

    localStorage.setItem(appName, JSON.stringify(newSettings));
  }
};

export const getLocalStorageSetting = key => {
  if (key) {
    const appName = appConstants.appName;
    const existingSettings = JSON.parse(localStorage.getItem(appName));

    return existingSettings?.[key];
  }
};

export const notificationExists = (state, payload, selector) => {
  const notifications = state.get(selector);
  const exists = notifications?.find(notification => _.isEqual(notification, payload));
  return exists;
};