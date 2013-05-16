# Import
{expect} = require('chai')
joe = require('joe')
normalify = require('../../')

# Task
joe.describe 'normalify', (describe,it) ->
	it 'should work', ->
		# Prepare
		fixture =
		    a: 'one'
		    b: '1'
		    c: '1.1'
		    d: 1
		    e: 1.1
		    f:
		        a: 'one'
			    b: '1'
			    c: '1.1'
			    d: 1
			    e: 1.1
		expected =
		    a: 'one'
		    b: 1
		    c: 1.1
		    d: 1
		    e: 1.1
		    f:
		        a: 'one'
			    b: 1
			    c: 1.1
			    d: 1
			    e: 1.1

		actual = normalify(fixture)

		expect(actual).to.deep.equal(expected)
