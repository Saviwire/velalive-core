import { useCallback, useEffect, useRef, useState } from 'react';

// useCamera -- the visitor's own webcam, in this tab, on request.
//
// getUserMedia only answers on a secure page (https or localhost)..
// The stream is stopped on unmount and by stop(), so closing the tab closes
// the camera light. Every failure ends in state 'off' with a plain note:
// nothing here ever draws a black rectangle or pretends to see a feed.
export function useCamera() {
  const [state, setState] = useState('off');
  const [note, setNote] = useState('');
  const [stream, setStream] = useState(null);
  const ref = useRef(null);

  const stop = useCallback(() => {
    if (ref.current) {
      ref.current.getTracks().forEach((t) => t.stop());
    }
    ref.current = null;
    setStream(null);
    setState('off');
  }, []);

  useEffect(() => stop, [stop]);

  const start = useCallback(async () => {
    setNote('');
    if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      if (typeof window !== 'undefined' && !window.isSecureContext) {
        setNote('A camera needs a secure address. This page must be served over https.');
      } else {
        setNote('This browser cannot open a camera from a page.');
      }
      return;
    }
    setState('requesting');
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 960 }, height: { ideal: 720 } },
        audio: false,
      });
      s.getVideoTracks().forEach((track) => {
        track.addEventListener('ended', () => stop());
      });
      ref.current = s;
      setStream(s);
      setState('live');
    } catch (err) {
      const name = err && err.name ? err.name : '';
      if (name === 'NotAllowedError' || name === 'SecurityError') {
        setNote('Permission was declined. Your camera stays off, and the page will ask again only if you press it.');
      } else if (name === 'NotFoundError' || name === 'OverconstrainedError') {
        setNote('No camera was found on this device.');
      } else {
        setNote('The camera could not open. Nothing was recorded.');
      }
      setState('off');
    }
  }, [stop]);

  return { state, note, start, stop, stream, ref };
}
