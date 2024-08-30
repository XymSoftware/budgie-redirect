import _ from 'lodash';

export const paramsToObject = params => {
  const decodedParams = decodeURI(params);
  const rawString = decodedParams.split(/[#?&]+/);
  const paramsArray = rawString.slice(1, rawString.length);
  const paramsObject = {};

  paramsArray.forEach(param => {
    const rawVal = param.split('=');
    const key = rawVal[0];
    const value = rawVal[1] === 'undefined' ? undefined : rawVal[1];

    if (paramsObject[key]) {
      if (Array.isArray(paramsObject[key])) {
        paramsObject[key].push(value);
        return;
      }

      paramsObject[key] = [ paramsObject[key], value ];
      return;
    }

    paramsObject[key] = value;
  });

  return paramsObject;
};

export const paramsToString = (params, isHash) => {
  const paramsArray = [];

  for (const key in params) {
    if (Array.isArray(params[key])) {
      params[key].forEach(value => {
        paramsArray.push(`${key}=${value}`);
      });
      return;
    }

    paramsArray.push(`${key}=${params[key]}`);
  }

  paramsArray.forEach((param, index) => {
    if (index === 0) {
      paramsArray[index] = `${isHash ? '#' : '?'}${encodeURI(param)}`;
      return;
    }

    paramsArray[index] = `&${encodeURI(param)}`;
  });

  return paramsArray.join('');
};

export const paramsFromHash = () => {
  const location = window.location.href;
  const paramSplit = location.split('#');
  const params = `#${paramSplit[1]}`;
  const workingParams = paramsToObject(params);

  delete workingParams.undefined;

  return paramsToString(workingParams, true);
};

export const paramsFromURL = () => {
  return window.location.search;
};

export const decode = value => {
  const isArray = _.isArray(value);
  const isString = _.isString(value);
  const isValid = value && value !== 'undefined' && (isString || isArray);

  const cleanItem = item => {
    return decodeURI(item)
      .replaceAll('%2B', ' ')
      .replaceAll('+', ' ')
      .replaceAll('%2C', ',')
      .replaceAll('%2F', '/')
      .replaceAll('%26', '&')
      .replaceAll('%5E', '^')
      .replaceAll('%24', '$')
      .replaceAll('%23', '#')
      .replaceAll('%40', '@')
      .replaceAll('%3D', '=')
      .replaceAll('%3B', ';')
      .replaceAll('%3A', ':')
      .replaceAll('%3F', '?');
  };

  if (!isValid) return;
  if (isArray) return value.map(item => cleanItem(item));
  return cleanItem(value);
};