// All requests related to user
import { request } from './_request';

import { config } from './config';

export const createFeedback = async (
	summary_id: number,
	score: number,
	feedback: string
): Promise<{
	status: number;
	data: any;
	message: string;
}> => {
	if (feedback === undefined || feedback.trim().length === 0) {
		return {
			status: 400,
			data: {},
			message: 'Feedback cannot be empty'
		};
	}

	const url = `${config.base_url}/feedback/`;
	const body = { summary_id, score, feedback, date: new Date() };
	return await request(url, body, 'POST', true);
};
