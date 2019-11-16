var express = require('express');
var app = express();

app.use(express.static('/Users/selim/Code/WebDesign/4T/4t'));

app.listen('3000');
console.log('working on 3000');