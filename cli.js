#!/usr/bin/env node
'use strict';
var meow = require('meow');
var showDesktop = require('./');

var cli = meow([
	'Usage',
	'  $ sd-cli',
]);
showDesktop();
