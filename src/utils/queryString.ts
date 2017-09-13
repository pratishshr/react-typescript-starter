import * as qs from 'qs';

/**
 * Convert url query string to object.
 * 
 * @param {string} queryString 
 * @returns T
 */
export function parse<T>(queryString: string): T {
  if (queryString.substr(0, 1) === '?') {
    queryString = queryString.substr(1);
  }

  return qs.parse(queryString);
}

/**
 * Conver url query params to string
 * 
 * @param {object} queryParams 
 */
export function stringify(queryParams: {}) {
  return `?${qs.stringify(queryParams)}`;
}
