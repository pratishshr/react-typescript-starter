import * as BluebirdPromise from 'bluebird';

import * as lang from './services/lang';

/**
 * Initializes stuff needed for the application.
 *
 * @returns {Promise}
 */
export default async function init() {
  // Replace the native Promise with bluebird.
  global.Promise = BluebirdPromise;

  return lang.init();
}
