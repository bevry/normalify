/* eslint no-use-before-define:0 */

/**
 * Convert the input from its source type into its actual type
 * @param input
 */
export default function normalify(input: any): any {
	const result = normalifyObject(input)
	if (result !== input) return result
	return normalifyString(input)
}

/**
 * Convert the input object and its nested values into their actual types
 * @param input
 */
export function normalifyObject(input: any): any {
	if (typeof input === 'object') {
		for (const key in input) {
			if (input.hasOwnProperty(key)) {
				const value = input[key]
				const result = normalify(value)
				// http://jsperf.com/pre-check
				if (result !== value) {
					input[key] = result
				}
			}
		}
	}
	return input
}

/**
 * Convert the input from its source type into its actual type
 * @param input
 */
export function normalifyString(input: any): any {
	if (typeof input === 'string') {
		if (input === 'NaN' || input === '"NaN"' || input === "'NaN'") {
			return NaN
		}
		try {
			if (input.startsWith("'") && input.endsWith("'")) {
				input = '"' + input.slice(1, -1) + '"'
			}
			const result = JSON.parse(input)
			if (result !== input) {
				return normalify(result)
			}
			return result
		} catch (err) {
			return input
		}
	} else {
		return input
	}
}
