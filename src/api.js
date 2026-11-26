import { MODAL_API_URL as CONFIGURED_MODAL_URL } from './config';

// The live Modal health endpoint. Keep this configurable: the hardcoded value
// went stale once already, and the dashboard should never point at a dead host.
const KNOWN_GOOD_MODAL_URL =
  'https://saviwire--velalive-ai-fastapi-app.us-east.modal.run';

export const MODAL_API_URL = CONFIGURED_MODAL_URL || KNOWN_GOOD_MODAL_URL;

export const checkBackendHealth = async () => {
  try {
    const res = await fetch(MODAL_API_URL + '/', { mode: 'cors', cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (err) {
    console.error('Backend health check failed:', err);
    return null;
  }
};
