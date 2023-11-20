// All requests related to health
import { request } from './_request';
import { config } from './config';

// Login
export const getHealth = async () => {
	const url = `${config.base_url}/health/`;
	return await request(url, {}, 'GET', false);
};
