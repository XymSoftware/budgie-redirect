
export const checkToken = args => {
  const { type, payload, callbacks } = args;

  return {
    type,
    path: '/users/me',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...callbacks,
  };
};

export const login = args => {
  const { type, payload, callbacks } = args;

 return {
    type,
    path: '/auth',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...callbacks,
  };
};

export const createUser = args => {
  const { type, payload, callbacks } = args;

 return {
    type,
    path: '/users',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...callbacks,
  };
};

export const updateUser = args => {
  const { type, payload, callbacks } = args;
  const { token, ...withoutToken } = payload;

 return {
    type,
    path: '/users',
    method: 'PUT',
    body: JSON.stringify(withoutToken),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
    ...callbacks,
  };
};

export const deleteUser = args => {
  const { type, payload, callbacks } = args;
  const { token, ...withoutToken } = payload;

 return {
    type,
    path: '/users',
    method: 'DELETE',
    body: JSON.stringify(withoutToken),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
    },
    ...callbacks,
  };
};

export const sendResetEmail = args => {
  const { type, payload, callbacks } = args;

 return {
    type,
    path: '/emails/pw-reset',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...callbacks,
  };
};