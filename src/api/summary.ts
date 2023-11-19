import { request } from './_request';
import { config } from './config';

export const getSummaries = async () => {
	// Get the summaries
	const url = `${config.base_url}/summary/user/`;
	return await request(url, {}, 'GET');
};

export const getSummary = async (id: string) => {
	// Get the summary
	const url = `${config.base_url}/summary/${id}`;
	return await request(url, {}, 'GET');
};
