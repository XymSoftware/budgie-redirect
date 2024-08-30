import { appReducer } from 'modules/app/appReducer';
import { authReducer } from 'modules/auth/authReducer';

const reducers = {
  app: appReducer,
  auth: authReducer,
};

export { reducers };