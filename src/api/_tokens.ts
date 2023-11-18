import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const setToken = (token: string, refresh: boolean) => {
	let name = refresh ? 'refresh_token' : 'access_token';
	const store: Writable<string> = localStorageStore(name, '');
	store.set(token);
};

export const getToken = (refresh: boolean) => {
	let name = refresh ? 'refresh_token' : 'access_token';
	const store: Writable<string> = localStorageStore(name, '');
	return get(store);
};

export const deleteToken = (refresh: boolean) => {
	let name = refresh ? 'refresh_token' : 'access_token';
	const store: Writable<string> = localStorageStore(name, '');
	store.set('');
};
