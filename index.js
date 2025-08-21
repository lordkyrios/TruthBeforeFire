// Next.js fallback homepage -> redirect to /studio
import { useEffect } from 'react';
export default function Index() {
  useEffect(() => { window.location.replace('/studio'); }, []);
  return null;
}
