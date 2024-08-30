import {
  actionCreator,
  prepPath,
  handleNotify,
  handleInitialRes,
  started,
  completed,
  succeeded,
  failed,
} from 'helpers';

const apiMiddleware = ({ dispatch }) => next => async action => {
  const isAPIRequest = action?.path || action?.method;

  if (action.type) {
    if (isAPIRequest) {
      apiRelay({ ...action, dispatch, next });
      return;
    }

    next(action);
  }
};

const dispatchLoadingState = args => {
  const { dispatch, type, isLoading } = args;
  const suffix = isLoading ? started : completed;
  const requestType = `${type}${suffix}`;
  const payload = isLoading;

  dispatch(actionCreator(requestType, payload));
};

const dispatchSuccessState = args => {
  const { dispatch, type, payload, meta, success } = args;
  const suffix = success ? succeeded : failed;
  const requestType = `${type}${suffix}`;

  dispatch(actionCreator(requestType, payload, meta));
};

export const apiRelay = args => {
  const { VITE_API_URL: basePath } = process.env;
  const { dispatch, next, ...action } = args;
  const { type, path, meta, onSuccess, onFail, onComplete, ...rest } = action;
  const url = `${basePath}${prepPath(path) || ''}`;
  const options = { ...rest };

  dispatchLoadingState({ dispatch, type, isLoading: true });

  fetch(url, options)
    .then(res => handleInitialRes({ res, onSuccess, onFail, dispatch }))
    .then(data => {
      if (data) {
        const { error, errors, ...payload } = data;
        handleNotify(dispatch, data);

        if (payload && (!error && !errors)) {
          dispatchSuccessState({ dispatch, type, payload, meta, success: true });
        }
      }
    })
    .catch(error => {
      console.error(error);
      dispatchSuccessState({ dispatch, type, payload: null, meta, success: false });
      onFail?.(error);
    })
    .finally(() => {
      onComplete?.();
      dispatchLoadingState({ dispatch, type, isLoading: false });
      next(action);
    });
};

export { apiMiddleware };