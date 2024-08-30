
export const started = '_REQUEST_STARTED';
export const completed = '_REQUEST_COMPLETED';
export const succeeded = '_REQUEST_SUCCEEDED';
export const failed = '_REQUEST_FAILED';

export const actionCreator = (type, payload, meta) => {
  const action = { type, payload };
  if (meta) { action.meta = meta; }
  return action;
};

export const makeInitialState = reducers => (
  Object.keys(reducers).reduce((prevState, key) => {
    const reducer = reducers[key];
    const reducerState = reducer();
    const combinedState = { ...prevState, [key]: reducerState };
    return combinedState;
  }, {})
);

export const request = type => {
  return {
    start: `${type}${started}`,
    complete: `${type}${completed}`,
    success: `${type}${succeeded}`,
    fail: `${type}${failed}`,
  };
};