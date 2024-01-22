export const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator?.userAgent);

export const isMobile = () =>
  typeof navigator === 'undefined' ||
  navigator?.userAgent?.match(/Android/i) ||
  navigator?.userAgent?.match(/webOS/i) ||
  navigator?.userAgent?.match(/iPhone/i) ||
  navigator?.userAgent?.match(/iPad/i) ||
  navigator?.userAgent?.match(/iPod/i) ||
  navigator?.userAgent?.match(/BlackBerry/i) ||
  navigator?.userAgent?.match(/Windows Phone/i);

export const isIos = () =>
  typeof navigator === 'undefined' ||
  navigator?.userAgent?.match(/iPhone/i) ||
  navigator?.userAgent?.match(/iPad/i) ||
  navigator?.userAgent?.match(/iPod/i);
