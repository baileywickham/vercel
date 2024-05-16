//@eslint-ignore
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			src: '/src'
		}
	},
	server: {
		proxy: {
			'/colors': {
				target: 'http://nt-cdn.s3.amazonaws.com',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/colors/, '')
			}
		}
	}
});
