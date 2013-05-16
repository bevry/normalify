var normalify = require('./');
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