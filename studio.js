// Next.js Pages Router shim for /studio -> static browser studio
import { useEffect } from 'react';

export default function StudioRedirect() {
  useEffect(() => {
    window.location.replace('/tbf-studio/index.html');
  }, []);
  return null;
}
