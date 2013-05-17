# Normalify

[![Build Status](https://secure.travis-ci.org/bevry/normalify.png?branch=master)](http://travis-ci.org/bevry/normalify)
[![NPM version](https://badge.fury.io/js/normalify.png)](https://npmjs.org/package/normalify)
[![Flattr this project](https://raw.github.com/balupton/flattr-buttons/master/badge-89x18.gif)](http://flattr.com/thing/344188/balupton-on-Flattr)

Normalize different variable value types - e.g. `"1"` becomes `1`



## Install

### Backend

1. [Install Node.js](http://bevry.me/node/install)
2. `npm install --save normalify`

### Frontend

1. [See Browserify](http://browserify.org/)



## Usage

``` javascript
var normalify = require('normalify');
var result = normalify({
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
});
console.log(JSON.stringify(result,null,4));
/* ouputs:
{
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
*/
```



## History
You can discover the history inside the [History.md](https://github.com/bevry/normalify/blob/master/History.md#files) file



## Backers
Check out the [Backers.md](https://github.com/bevry/normalify/blob/master/Backers.md#files) file to discover all the amazing people who financially supported the development of this project.



## License
Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://creativecommons.org/licenses/MIT/)
<br/>Copyright © 2013+ [Bevry Pty Ltd](http://bevry.me)
