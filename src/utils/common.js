/* eslint-disable no-nested-ternary */

export const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

export const uid = () =>
  // eslint-disable-next-line operator-linebreak
  Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

export const convertMoney = (amount, convertTo = 'paise', currency = 'INR', locale = 'en-IN') => {
  // Money will be sent in paise format from api.
  let money;
  if (convertTo === 'paise') {
    money = amount * 100;
  } else money = amount / 100;

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  });
  return formatter.format(money).replace(/\D00$/, ''); // replacing .00
};

export const uniqueObjArray = (arr, prop) => {
  const newArr = Array.from(new Set(arr.map((a) => a[prop]))).map((item) => {
    return arr.find((a) => a[prop] === item);
  });

  return newArr;
};

export const uniq = (arr) => {
  return [...new Set(arr)];
};

export const omitValue = (key, obj) => {
  const { [key]: _, ...rest } = obj;
  return rest;
};

export const headOrTail = (arr, type = 'head') => {
  const [head, ...tail] = arr;
  if (type === 'tail') return tail;
  return head;
};

export const sortObjectArrBy = (arr, key) => {
  return arr.concat().sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
};

export const times = (num) => {
  return [...Array(num).keys()];
};

export const noop = () => {};

export const removeArrayItemByIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const handleGoogleMapLocation = (lat, lng) => {
  if (navigator.platform.indexOf('iPhone') !== -1 || navigator.platform.indexOf('iPod') !== -1) {
    // eslint-disable-next-line consistent-return
    const iOSversion = () => {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        const v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      }
    };
    const ver = iOSversion() || [0];

    let protocol = 'http://';
    if (ver[0] >= 6) {
      protocol = 'maps://';
    }
    window.location = `${protocol}maps.apple.com/maps?daddr=${lat},${lng}&amp;ll=`;
  } else {
    // window.open(`https://maps.google.com?daddr=${lat},${lng}&amp;ll=`, '_blank');
    window.open(`https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`);
  }
};

export const initialsGenerator = (name) => {
  const nameSplit = name.split(' ');
  return nameSplit[0].charAt(0).toUpperCase() + (nameSplit[1] ? nameSplit[1].charAt(0).toUpperCase() : nameSplit[0].charAt(1).toLowerCase());
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
