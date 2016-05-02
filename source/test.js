// Import
const {deepEqual} = require('assert-helpers')
const joe = require('joe')
const normalify = require('../')

// Task
joe.describe('normalify', function (suite, test) {
	test('should work', function () {
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
