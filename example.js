var ds1621 = require('./ds1621.js'),
	sensor = new ds1621({device:'/dev/i2c-1'});

//sensor.getTemp(function(temperature) {
sensor.getHighPrecTemp(function(temperature) {
	console.log('Temperature: ' + temperature + '°C');
	process.exit();
});