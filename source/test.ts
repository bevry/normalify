// Import
import { deepEqual } from 'assert-helpers'
import kava from 'kava'
import normalify from './'

// Local
const nan = 0 / 0

// Task
kava.suite('normalify', function(suite, test) {
	test('should work', function() {
		const fixture = {
			a: 'one',
			b: '1',
			c: '1.1',
			d: 1,
			e: 1.1,
			f: "'hello'",
			g: '"world"',
			h: 'NaN',
			i: nan,
			j: 'true',
			k: true,
			l: 'false',
			m: false,
			n: 'null',
			o: null,
			z: {
				a: 'one',
				b: '1',
				c: '1.1',
				d: 1,
				e: 1.1,
				f: "'hello'",
				g: '"world"',
				h: 'NaN',
				i: nan,
				j: 'true',
				k: true,
				l: 'false',
				m: false,
				n: 'null',
				o: null
			}
		}

		const expected = {
			a: 'one',
			b: 1,
			c: 1.1,
			d: 1,
			e: 1.1,
			f: 'hello',
			g: 'world',
			h: nan,
			i: nan,
			j: true,
			k: true,
			l: false,
			m: false,
			n: null,
			o: null,
			z: {
				a: 'one',
				b: 1,
				c: 1.1,
				d: 1,
				e: 1.1,
				f: 'hello',
				g: 'world',
				h: nan,
				i: nan,
				j: true,
				k: true,
				l: false,
				m: false,
				n: null,
				o: null
			}
		}

		const actual = normalify(fixture)

		deepEqual(actual, expected)
	})
})
