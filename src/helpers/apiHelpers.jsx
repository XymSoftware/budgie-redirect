import { appActions } from 'modules';
import _ from 'lodash';

export const prepPath = path => {
  if (!_.startsWith(path, '/')) return `/${path}`;
  return path;
};

export const handleNotify = (dispatch, data) => {
  const messages = data?.message || data?.messages;
  const errorMessages = data?.error || data?.errors;

  if (messages || errorMessages) {
    const addNotification = payload => dispatch(appActions?.addNotification(payload));
    const messageArray = _.isArray(messages);
    const errorMessageArray = _.isArray(errorMessages);

    const buildNotification = (item, typeFallback) => {
      const { message, msg, icon, type } = item;

      return {
        message: message || msg || item,
        icon,
        type: type || typeFallback,
      };
    };

    if (messageArray) {
      messages.forEach(item => addNotification(buildNotification(item)));
      return;
    }

    if (errorMessageArray) {
      errorMessages.forEach(item => addNotification(buildNotification(item, 'error')));
      return;
    }

    if (messages) addNotification(buildNotification(messages));

    if (errorMessages) {
      addNotification(buildNotification(errorMessages, 'error'));
    }
  }
};

const handleOtherResponses = args => {
  const { dispatch, res, onFail } = args;
  const { status, statusText } = res;
  const text = `: ${statusText}`;
  const message = {
    message: `${status}${statusText ? text : ' Response'}.`,
    type: status < 400 ? 'info' : 'error',
  };

  if (status >= 400) onFail?.(res);
  handleNotify(dispatch, { message });
};

export const handleInitialRes = async args => {
  const { res, onSuccess, onFail, dispatch } = args;

  if (res.status >= 200 && res.status < 300) onSuccess?.(res);

  if (res.status >= 300 && res.status !== 429) {
    // 429 notify is being sent from back-end rate limiter, directly.
    const resArgs = { dispatch, res, onFail };
    handleOtherResponses(resArgs);
  }

  if (res.status !== 504) return res.json();
};