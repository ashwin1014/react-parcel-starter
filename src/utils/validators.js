import { parsePhoneNumberFromString } from 'libphonenumber-js/mobile';

export const isPhoneNumberValid = (phoneNumber, country = 'IN') => {
  const mobilePhoneNumber = parsePhoneNumberFromString(`Phone: ${phoneNumber.toString()}`, country);
  if (mobilePhoneNumber) {
    if (mobilePhoneNumber.country === country && mobilePhoneNumber.getType() === 'MOBILE') {
      return true;
    }
    return false;
  }
  return false;
};

export const isNumber = (num) => {
  const numRegX = /^[0-9\b]+$/;
  if (numRegX.test(num)) {
    return true;
  }
  return false;
};

export const allowOnlyNumbers = (e) => {
  const charCode = typeof e.which === 'undefined' ? e.keyCode : e.which;
  const charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
};

export const maxLengthCheck = (ele) => {
  // use with onInput and give maxLength property
  if (ele.target.value.length > ele.target.maxLength) {
    // eslint-disable-next-line no-param-reassign
    ele.target.value = ele.target.value.slice(0, ele.target.maxLength);
  }
};

export const validatePan = (pan) => {
  const panRegEx = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  if (panRegEx.test(pan)) {
    return true;
  }
  return false;
};
