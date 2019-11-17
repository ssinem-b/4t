var express = require('express');
var app = express();
/*
const csp = require('express-csp-header');
app.use(csp({
    policies: {
        'script-src': [csp.NONCE]
    }
}));
*/
app.use(express.static(__dirname + '/'));
app.listen('3000');
console.log('working on 3000');7