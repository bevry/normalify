# Normalify
normalify = (item) ->
	types = ['object','numeric']
	for type in types
		result = normalify[type](item)
		if result isnt item
			break
	return result

# Object
normalify.object = (item) ->
	if typeof item is 'object'
		for own key,value of item
			result = normalify(value)
			if result isnt value  # faster - http://jsperf.com/pre-check
				item[key] = result
	return item

# Numeric
normalify.numeric = (item) ->
	if isNaN(item) is false
		item = Number(item)
	return item

# Export
module.exports = normalify