import { config } from './config';
import { getLoggedIn, logOut, hasToBeLoggedIn } from './_loggedIn';
import { getToken, setToken } from './_tokens';

const tokenExpired = (token: string): boolean => {
	const tokenParts = JSON.parse(atob(token.split('.')[1]));
	const tokenExp = tokenParts.exp * 1000;
	const now = new Date().getTime();
	const diff = tokenExp - now;
	return diff < 0;
};

const refreshTokenWhenExpired = async () => {
	// Get the current access token
	const token = getToken(false);
	// Check if the token is expired
	if (!token) return;
	if (!tokenExpired(token)) return;

	// Check if the refresh token is expired
	const refresh = getToken(true);
	if (!refresh) return;
	if (tokenExpired(refresh)) {
		console.warn('Refresh token is expired, logging out');
		logOut();
		hasToBeLoggedIn(); // Redi   rect to login page
		return;
	}

	const body = {
		refresh_token: getToken(true)
	};

	console.log('body', body, JSON.stringify(body));
	let response = await fetch(config.base_url + '/user/refresh', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});

	// Set the new token in local storage if it exists
	if (response.status === 200) {
		const data = await response.json();
		setToken(data.access_token, false);
	} else {
		console.warn('Could not refresh token', response);
	}
};

export const request = async (
	url: string,
	body: object,
	method: string = 'GET',
	loginRequired: boolean = true,
	includeBody: boolean = true
) => {
	// Add body to payload if method is not GET
	let payload = {
		method
	};
	if (method.toUpperCase() != 'GET' && includeBody) {
		payload = {
			...payload,
			...{ body: JSON.stringify(body) }
		};
	}

	// Add headers to payload
	const loggedIn = getLoggedIn();

	if (loggedIn && loginRequired) {
		await refreshTokenWhenExpired();
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

	const response = await fetch(url, payload);
	let data;
	try {
		data = await response.json();
	} catch (e) {
		data = {};
	}
	return {
		status: response.status,
		data: data,
		message: response.statusText
	};
};

export const requestMultipart = async (
	url: string,
	formData: FormData,
	method: string = 'GET',
	loginRequired: boolean = true
) => {
	let payload = {
		method: method
	};
	if (method.toUpperCase() != 'GET') {
		payload = {
			...payload,
			...{ body: formData }
		};
	}

	// Add headers to payload
	const loggedIn = getLoggedIn();

	if (loggedIn && loginRequired) {
		await refreshTokenWhenExpired();
		payload = {
			...payload,
			...{
				headers: { Authorization: `Bearer ${getToken(false)}` }
			}
		};
	}
	const response = await fetch(url, payload);
	let data;
	try {
		data = await response.json();
	} catch (e) {
		data = {};
	}
	return {
		status: response.status,
		data: data,
		message: response.statusText
	};
};
