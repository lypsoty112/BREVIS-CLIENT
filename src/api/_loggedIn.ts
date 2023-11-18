import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import { setToken, getToken, deleteToken } from './_tokens';

export const setLoggedIn = (value: boolean) => {
	const store: Writable<boolean> = localStorageStore('loggedIn', false);
	store.set(value);
};

export const getLoggedIn = () => {
	const store: Writable<boolean> = localStorageStore('loggedIn', false);
	return get(store);
};

export const logOut = () => {
	setLoggedIn(false);
	deleteToken(false);
	deleteToken(true);
};

export const hasToBeLoggedIn = (customHref: string = '/') => {
	if (!getLoggedIn()) {
		window.location.href = customHref;
	}
};

export const hasToBeLoggedOut = (customHref: string = '/home') => {
	if (getLoggedIn()) {
		window.location.href = customHref;
	}
};
