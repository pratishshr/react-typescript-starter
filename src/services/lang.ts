import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';

import * as lang from '../constants/lang';
import { KEY_SELECTED_LANG } from '../constants/storage';

import * as storage from '../utils/storage';
import * as queryString from '../utils/queryString';

addLocaleData([...en]);

export const LANG_KEY = 'lang';
export const LANG_DEFAULT = lang.ENGLISH;

/**
 * Check if it should display the language selection overlay.
 *
 * @return {boolean}
 */
export function shouldDisplayWelcome(): boolean {
  let query = getFromUrl();
  let selectedLanguage = storage.get(KEY_SELECTED_LANG);

  return !selectedLanguage && !query;
}

/**
 * Get value from storage for given key .
 *
 * @return {string}
 */
export function getCurrentLanguage(): string {
  let queriedLanguage = getFromUrl();
  let savedLanguage = storage.get(KEY_SELECTED_LANG);

  return queriedLanguage || savedLanguage || LANG_DEFAULT;
}

/**
 * Get value from storage for given key .
 *
 * @param {string} languageSelectedValue
 */
export function setCurrentLanguage(languageSelectedValue: string) {
  storage.set(KEY_SELECTED_LANG, languageSelectedValue);
}

/**
 * Gets the language value from the url querystring.
 *
 * @returns {string}
 */
function getFromUrl(): string {
  let query = queryString.parse(window.location.search);

  return query[LANG_KEY];
}

/**
 * Returns the available language keys (locales).
 *
 * @returns {Array}
 */
export function getLanguages(): string[] {
  return Object.keys(lang.info);
}

/**
 * Gets the user locale from the browser.
 *
 * @returns {string}
 */
export function getLocale(): string {
  // Define user's language. Different browsers have the user locale defined
  // on different fields on the `navigator` object, so we make sure to account
  // for these different by checking all of them.
  return (
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator['userLanguage']
  );
}

/**
 * Ensure the builtin Intl API is supported.
 * If browser doesn't support Intl (i.e. Safari), then we manually import
 * the intl polyfill and locale data.
 *
 * @returns {Promise}
 */
export function ensureIntlSupported() {
  return new Promise((resolve, reject) => {
    if (window['Intl']) {
      return resolve();
    }

    return Promise.all([
      require('intl'),
      require('intl/locale-data/jsonp/en.js')
    ]);
  });
}

/**
 * Imports the language data dynamically. The imported data
 * won't be bundled along the main bundle but will be loaded
 * in separate chunks.
 *
 * @export
 * @param {string} locale
 * @returns {Promise}
 */
export function importLangData(locale: string) {
  const defaultLocale = 'en-us';

  try {
    return require(`../i18n/${locale}/app.json`);
  } catch (e) {
    return require(`../i18n/${defaultLocale}/app.json`);
  }
}

/**
 * Initialize languages and load the i18n data.
 *
 * @returns {Promise}
 */
export async function init() {
  return ensureIntlSupported().then(async () => {
    const locale = getLocale();
    const messages = await importLangData(getCurrentLanguage());

    return { locale, messages };
  });
}
