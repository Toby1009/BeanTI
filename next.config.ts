import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

// Keep the live preview independent from production builds and their asset hashes.
const config = (phase: string): NextConfig => ({
  poweredByHeader: false,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});
export default config;
