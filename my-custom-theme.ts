import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const studygptTheme: CustomThemeConfig = {
	name: 'StudyGPT Theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '16px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #2C2C54
		'--color-primary-50': '223 223 229', // #dfdfe5
		'--color-primary-100': '213 213 221', // #d5d5dd
		'--color-primary-200': '202 202 212', // #cacad4
		'--color-primary-300': '171 171 187', // #ababbb
		'--color-primary-400': '107 107 135', // #6b6b87
		'--color-primary-500': '44 44 84', // #2C2C54
		'--color-primary-600': '40 40 76', // #28284c
		'--color-primary-700': '33 33 63', // #21213f
		'--color-primary-800': '26 26 50', // #1a1a32
		'--color-primary-900': '22 22 41', // #161629
		// secondary | #474787
		'--color-secondary-50': '227 227 237', // #e3e3ed
		'--color-secondary-100': '218 218 231', // #dadae7
		'--color-secondary-200': '209 209 225', // #d1d1e1
		'--color-secondary-300': '181 181 207', // #b5b5cf
		'--color-secondary-400': '126 126 171', // #7e7eab
		'--color-secondary-500': '71 71 135', // #474787
		'--color-secondary-600': '64 64 122', // #40407a
		'--color-secondary-700': '53 53 101', // #353565
		'--color-secondary-800': '43 43 81', // #2b2b51
		'--color-secondary-900': '35 35 66', // #232342
		// tertiary | #AAABB8
		'--color-tertiary-50': '242 242 244', // #f2f2f4
		'--color-tertiary-100': '238 238 241', // #eeeef1
		'--color-tertiary-200': '234 234 237', // #eaeaed
		'--color-tertiary-300': '221 221 227', // #dddde3
		'--color-tertiary-400': '196 196 205', // #c4c4cd
		'--color-tertiary-500': '170 171 184', // #AAABB8
		'--color-tertiary-600': '153 154 166', // #999aa6
		'--color-tertiary-700': '128 128 138', // #80808a
		'--color-tertiary-800': '102 103 110', // #66676e
		'--color-tertiary-900': '83 84 90', // #53545a
		// success | #84CC16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84CC16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #FF0000
		'--color-error-50': '255 217 217', // #ffd9d9
		'--color-error-100': '255 204 204', // #ffcccc
		'--color-error-200': '255 191 191', // #ffbfbf
		'--color-error-300': '255 153 153', // #ff9999
		'--color-error-400': '255 77 77', // #ff4d4d
		'--color-error-500': '255 0 0', // #FF0000
		'--color-error-600': '230 0 0', // #e60000
		'--color-error-700': '191 0 0', // #bf0000
		'--color-error-800': '153 0 0', // #990000
		'--color-error-900': '125 0 0', // #7d0000
		// surface | #404040
		'--color-surface-50': '226 226 226', // #e2e2e2
		'--color-surface-100': '217 217 217', // #d9d9d9
		'--color-surface-200': '207 207 207', // #cfcfcf
		'--color-surface-300': '179 179 179', // #b3b3b3
		'--color-surface-400': '121 121 121', // #797979
		'--color-surface-500': '64 64 64', // #404040
		'--color-surface-600': '58 58 58', // #3a3a3a
		'--color-surface-700': '48 48 48', // #303030
		'--color-surface-800': '38 38 38', // #262626
		'--color-surface-900': '31 31 31' // #1f1f1f
	}
};
