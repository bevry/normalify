/* eslint no-use-before-define:0 */
'use strict'

// Normalify
function normalify(item) {
	let result
	result = normalifyObject(item)
	if (result !== item) return result
	result = normalifyNumeric(item)
	if (result !== item) return result
	return item
}

// Object
function normalifyObject(item) {
	if (typeof item === 'object') {
		for (const key in item) {
			if (item.hasOwnProperty(key)) {
				const value = item[key]
				const result = normalify(value)
				// http://jsperf.com/pre-check
				if (result !== value) {
					item[key] = result
				}
			}
		}
	}
	return item
}

// Numeric
function normalifyNumeric(item) {
	if (isNaN(item) === false) return Number(item)
	return item
}

// Export and aliases
module.exports = normalify
normalify.object = normalifyObject
normalify.numeric = normalifyNumeric
