'use strict'

const nan = 0 / 0
const normalify = require('./').default
const result = normalify({
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
		o: null,
	},
})
console.log(result)
