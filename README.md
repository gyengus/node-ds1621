# node-ds1621

[![NPM version](https://img.shields.io/npm/v/ds1621.svg?style=flat)](http://npmjs.com/package/ds1621) [![Downloads](http://img.shields.io/npm/dm/ds1621.svg)](http://npmjs.com/package/ds1621) [![Support us](http://img.shields.io/gittip/gyengus.svg)](https://www.gittip.com/gyengus/)

Node.js module for DS1621 temperature sensor

Tested on Raspberry Pi B+

## Installation

```bash
$ npm install ds1621
```

## Usage

```javascript
var ds1621 = require('ds1621.js'),
	sensor = new ds1621({device:'/dev/i2c-1'});

sensor.getHighPrecTemp(function(temperature) {
	console.log('Temperature: ' + temperature + '°C');
	process.exit();
});
```

Run, the example:

```bash
$ sudo node example.js
```

Please note: You must run this in root account.
