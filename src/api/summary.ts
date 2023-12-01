import { request, requestMultipart } from './_request';
import { config } from './config';

export const getSummaries = async () => {
	// Get the summaries
	const url = `${config.base_url}/summary/user/`;
	return await request(url, {}, 'GET');
};

export const getSummary = async (id: number) => {
	// Get the summary
	const url = `${config.base_url}/summary/${id}`;
	return await request(url, {}, 'GET');
};

export const deleteSummary = async (id: number) => {
	// Delete the summary
	const url = `${config.base_url}/summary/${id}`;
	return await request(url, {}, 'DELETE', true, false);
};

export const createSummary = async (
	file: File,
	title: string,
	description: string | undefined,
	selectedParameters: number[],
	parameters: any[]
): Promise<{
	status: number;
	data: any;
	message: string;
}> => {
	// Make sure the file is not empty
	if (file.size === 0) {
		return {
			status: 400,
			data: {},
			message: 'File cannot be empty'
		};
	}

	// Make sure the title is not empty
	if (!title || title.length === 0) {
		return {
			status: 400,
			data: {},
			message: 'Title cannot be empty'
		};
	}

	// Make sure the correct parameters are selected
	if (selectedParameters.length === 0) {
		return {
			status: 400,
			data: {},
			message: 'Please select at least one parameter'
		};
	}

	// TODO: Make sure the selected parameters are valid
	if (description?.length === 0) {
		description = undefined;
	}
	// Send the request
	const url = `${config.base_url}/summary/`;
	const formData = new FormData();
	formData.append('file', file, file.name);
	formData.set('name', title);
	if (description) formData.set('description', description);
	formData.set('parameters', JSON.stringify(selectedParameters));
	return await requestMultipart(url, formData, 'POST', true);
};

export const testSummary = async (
	file: File
): Promise<{
	status: number;
	data: any;
	message: string;
}> => {
	// Make sure the file is not empty
	if (file.size === 0) {
		return {
			status: 400,
			data: {},
			message: 'File cannot be empty'
		};
	}

	// Send the request
	const url = `${config.base_url}/summary/test/`;
	const formData = new FormData();
	formData.append('file', file, file.name);
	formData.set('name', 'test: ' + new Date().toLocaleString());
	formData.set('description', 'test: ' + file.name);
	formData.set('parameters', JSON.stringify([1]));
	return await requestMultipart(url, formData, 'POST', true);
};
