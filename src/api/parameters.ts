// All requests related to api
import { request } from './_request';
import { config } from './config';

export const getParameters = async () => {
	const url = `${config.base_url}/parameter_class/`;
	return await request(url, {}, 'GET', true);
};
