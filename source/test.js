'use strict'

// Import
const { deepEqual } = require('assert-helpers')
const kava = require('kava')
const normalify = require('../')

// Task
kava.describe('normalify', function(suite, test) {
	test('should work', function() {
		const fixture = {
			a: 'one',
			b: '1',
			c: '1.1',
			d: 1,
			e: 1.1,
			f: {
				a: 'one',
				b: '1',
				c: '1.1',
				d: 1,
				e: 1.1
			}
		}

		const expected = {
			a: 'one',
			b: 1,
			c: 1.1,
			d: 1,
			e: 1.1,
			f: {
				a: 'one',
				b: 1,
				c: 1.1,
				d: 1,
				e: 1.1
			}
		}

		const actual = normalify(fixture)

		deepEqual(actual, expected)
	})
})
