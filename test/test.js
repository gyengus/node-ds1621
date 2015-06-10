var assert = require("assert");
var ds1621 = require('../ds1621.js'),
	sensor = new ds1621({device:'/dev/i2c-1'});

describe('DS1621 module test', function() {
	it('should be an object', function() {
		assert.equal(typeof sensor, 'object')
	});
	it('should have a getTemp method', function() {
		assert.equal(typeof sensor.getTemp, 'function')
	});
	it('should have a getHighPrecTemp method', function() {
		assert.equal(typeof sensor.getHighPrecTemp, 'function')
	});
	it('the temperature shuld be a number', function() {
		sensor.getTemp(function(temperature) {
			assert.equal(typeof temperature, 'number');
		});
	});
	it('the high precision temperature shuld be a number', function() {
		sensor.getHighPrecTemp(function(temperature) {
			assert.equal(typeof temperature, 'number');
		});
	});
});
