'use strict';
var robot = require('robotjs')
module.exports = function () {
	if (process.platform === 'win32') {
		robot.keyTap('D', 'command');
	} else if(process.platform === 'linux'){
		robot.keyTap('D', ['command', 'control']);
	} else if(process.platform === 'darwin'){
		robot.keyTap('f11');
	}
};
