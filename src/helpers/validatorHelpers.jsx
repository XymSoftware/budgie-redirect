import { jwtDecode } from 'jwt-decode';
import moment from 'moment';

export const tokenValid = token => {
  const milliAsSecond = 1000;
  let expired = true;

  try {
    const inSeconds = jwtDecode(token).exp * milliAsSecond;
    const expires = moment(inSeconds);
    expired = moment() > expires;
    return !expired;
  } catch (error) {
    console.log(error.message);
    return !expired;
  }
};

export const hexValid = val => {
  const isValid = val?.startsWith?.('#') && (
    val?.length === 4
    || val?.length === 7
    || val?.length === 9
  );

  if (isValid) return val;
};

export const iconValid = val => {
  const types = [ 'solid', 'regular', 'light', 'thin', 'duotone', 'sharp', 'brands' ];
  const isValid =  types.find(type => val?.startsWith?.(`fa-${type} fa-`));
  if (isValid) return val;
};

export const urlValid = val => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-_~:?#[\]@!&',;=.]+$/g;
  const hasProtocol = val?.includes?.('https://');
  const isValid = regex.test(val);

  if (isValid) {
    return hasProtocol ? val : `https://${val}`;
  }

  return val?.includes?.('localhost') ? val : '';
};