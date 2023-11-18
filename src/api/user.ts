// All requests related to user
import { request } from './_request';
import { setToken } from './_tokens';
import { config } from './config';
import * as EmailValidator from 'email-validator';
import type { Writable } from 'svelte/store';
import { setLoggedIn } from './_loggedIn';

const getResponseMessage = (response: { status: number; data: any; message: string }): string => {
	let responseMessage;
	// Check if the responsemessage is an object
	if (typeof response.data.detail == 'object') {
		responseMessage = response.data.detail[0].msg;
	} else {
		responseMessage = response.data.detail;
	}
	return responseMessage;
};

// Login
export const login = async (email: string, password: string) => {
	if (!email || !password) {
		return {
			status: 400,
			data: {},
			message: 'Email and password are required'
		};
	}

	if (!EmailValidator.validate(email)) {
		return {
			status: 400,
			data: {},
			message: 'Invalid email'
		};
	}

	const url = `${config.base_url}/user/login`;
	const body = { email, password };
	let response = await request(url, body, 'POST');
	if (response.status != 200) {
		return {
			status: response.status,
			data: {},
			message: getResponseMessage(response)
		};
	}
	// Set tokens in local storage
	if (response.status == 200) {
		setToken(response.data.access_token, false);
		setToken(response.data.refresh_token, true);
		// Set logged in
		setLoggedIn(true);
	}

	return response;
};

// Register
export const register = async (
	username: string,
	email: string,
	password: string,
	repeatPassword: string
) => {
	if (!username || !email || !password || !repeatPassword) {
		return {
			status: 400,
			data: {},
			message: 'No fields can be empty'
		};
	}

	if (!EmailValidator.validate(email)) {
		return {
			status: 400,
			data: {},
			message: 'Invalid email'
		};
	}

	if (password != repeatPassword) {
		return {
			status: 400,
			data: {},
			message: 'Passwords do not match'
		};
	}

	const url = `${config.base_url}/user/register`;
	const body = { username: username, email: email, password: password };
	let response = await request(url, body, 'POST');
	if (response.status != 201) {
		console.log(response);
		return {
			status: response.status,
			data: {},
			message: getResponseMessage(response)
		};
	}
	// Set tokens in local storage
	if (response.status == 201) {
		setToken(response.data.access_token, false);
		setToken(response.data.refresh_token, true);
		// Set logged in
		setLoggedIn(true);
	}

	return response;
};
