import { NextStudio } from 'sanity/nextjs'; // This is actually part of 'sanity' in v3 for generic react apps too, but let's check
import { Studio } from 'sanity';
import config from '../../sanity.config';

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Studio config={config} />
    </div>
  );
}
