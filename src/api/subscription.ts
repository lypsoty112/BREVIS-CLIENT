import { request } from './_request';
import { config } from './config';

export const getSubscriptions = async () => {
	const url = `${config.base_url}/subscription`;
	return await request(url, {}, 'GET', false);
};

export const getSubscriptionByUser = async () => {
	const url = `${config.base_url}/subscription/user/`;
	return await request(url, {}, 'GET', true);
};
