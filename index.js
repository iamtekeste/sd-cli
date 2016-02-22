'use strict';
var robot = require('robotjs')
module.exports = function () {
	robot.keyTap('D', ['command', 'control']);
};
