import fetch from 'node-fetch';

import type {Link, Store} from '../store/model/store';
import {logger} from '../logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function sendHttp(link: Link, _store: Store) {
  logger.debug('↗ sending http');

  try {
    await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({url: link.url}),
    });
    logger.info('✔ http sent');
  } catch (error) {
    logger.error("✖ couldn't send http", error);
  }
}
