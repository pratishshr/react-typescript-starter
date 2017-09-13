import * as qs from 'qs';

/**
 * Convert url query string to object.
 * 
 * @param string queryString 
 * @returns T
 */
export function parseQueryString<T>(queryString: string): T {
  if (queryString.substr(0, 1) === '?') {
    queryString = queryString.substr(1);
  }

  return qs.parse(queryString);
}

/**
 * Conver url query params to string
 * 
 * @param queryParams 
 */
export function toQueryString(queryParams: {}) {
  return `?${qs.stringify(queryParams)}`;
}
