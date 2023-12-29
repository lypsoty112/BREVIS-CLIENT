import type { ToastSettings } from '@skeletonlabs/skeleton';

export const errorToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-glass-error');
};

export const successToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-glass-success');
};

export const infoToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-glass-primary');
};

export const warningToast = (message: string): ToastSettings => {
	return baseToast(message, 'variant-glass-warning');
};

const baseToast = (message: string, background: string): ToastSettings => {
	const t: ToastSettings = {
		message: message,
		hideDismiss: false,
		timeout: 7500,
		background: background
	};
	return t;
};
