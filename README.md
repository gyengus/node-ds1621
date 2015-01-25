# node-ds1621

Node.js module for DS1621 temperature sensor
Tested on Raspberry Pi B+

## Installation
<pre>
$ npm install ds1621
</pre>
## Usage
<pre>
var ds1621 = require('ds1621.js'),
	sensor = new ds1621({device:'/dev/i2c-1'});

sensor.getHighPrecTemp(function(temperature) {
	console.log('Temperature: ' + temperature + '°C');
	process.exit();
});
</pre>
Run, the example:
<pre>
$ sudo node example.js
</pre>
Please note: You must run this in root account.
