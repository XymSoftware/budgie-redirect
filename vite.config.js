import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';
import PackageJSON from './package.json';
import dotenv from 'dotenv';

dotenv.config();

const config = defineConfig(args => {
  const { mode } = args;
  const { name, version } = PackageJSON;

  const viteVariables = loadEnv(mode, process.cwd());
  const env = { ...process.env, ...viteVariables };

  const {
    VITE_API_V1: apiV1,
    VITE_FRONT_END_PORT: frontEndPort,
    VITE_BACK_END_PORT: backEndPort,
    VITE_SENTRY_AUTH_TOKEN: sentryAuthToken,
    VITE_SENTRY_ORG: sentryOrg,
    VITE_SENTRY_PROJECT: sentryProject,
  } = env;

  const inProduction = mode === 'production';

  const sentryConfig = {
    authToken: sentryAuthToken,
    org: sentryOrg,
    project: sentryProject,
    release: `${name}@${version}`,
    include: './dist',
  };

  return {
    define: { 'process.env': env },
    build: { chunkSizeWarningLimit: 1600, sourcemap: true },
    server: {
      port: frontEndPort,
      proxy: !inProduction && {
        [apiV1]: {
          target: `http://localhost:${backEndPort}`,
          changeOrigin: true,
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: [ './tests/setupTests.jsx' ],
    },
    plugins: [
      react(),
      jsconfigPaths(),
      eslint(),
      sentryVitePlugin(sentryConfig),
    ],
  };
});

export default config;