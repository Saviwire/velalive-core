/**
 * Minimal hash router.
 *
 * Deliberately not react-router-dom: the site deploys to a plain static host
 * (and a Docker/Nginx image) that serves index.html for every path, and a
 * dependency-free hash route works there with zero rewrite rules. Callers
 * only use useRoute() and toolHref(), so this can be swapped later without
 * touching components.
 *
 *   #/            -> landing page
 *   #/tool/<id>   -> a tool page from src/tools/registry.js
 */

import { useEffect, useState } from 'react';

const parse = (hash) => {
  const clean = (hash || '').replace(/^#\/?/, '');
  const parts = clean.split('/').filter(Boolean);

  if (parts[0] === 'tool' && parts.length === 2) {
    let id = parts[1];
    try {
      id = decodeURIComponent(id);
    } catch {
      // Malformed escape: leave the id as-is, getToolById will 404 it.
    }
    return { view: 'landing', toolId: id };
  }

  return { view: 'landing', toolId: null };
};

export function useRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export const toolHref = (id) => '#/tool/' + encodeURIComponent(id);
