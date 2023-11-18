import { getLoggedIn } from './_loggedIn';
import { getToken } from './_tokens';

export const request = async (url: string, body: object, method: string = 'GET') => {
	// Add body to payload if method is not GET
	let payload = {
		method
	};
	if (method.toUpperCase() != 'GET') {
		payload = {
			...payload,
			...{ body: JSON.stringify(body) }
		};
	}

	// Add headers to payl	oad
	const loggedIn = getLoggedIn();

	if (loggedIn) {
		payload = {
			...payload,
			...{
				headers: { Authorization: `Bearer ${getToken(false)}`, 'Content-Type': 'application/json' }
			}
		};
	} else {
		payload = {
			...payload,
			...{
				headers: { 'Content-Type': 'application/json' }
			}
		};
	}

	console.log(payload);
	const response = await fetch(url, payload);
	const data = await response.json();
	return {
		status: response.status,
		data: data,
		message: response.statusText
	};
};
