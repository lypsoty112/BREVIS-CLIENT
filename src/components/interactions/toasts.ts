import type { ToastSettings } from '@skeletonlabs/skeleton';

export const errorToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-filled-error');
};

export const successToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-filled-success');
};

export const infoToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-filled-primary');
};

export const warningToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-filled-warning');
};

const baseToast = (message: string, background: string): ToastSettings => {
	const t: ToastSettings = {
		message: message,
		hideDismiss: true,
		timeout: 7500,
		background: background
	};
	return t;
};
