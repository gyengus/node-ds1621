# node-ds1621

[![NPM version](https://img.shields.io/npm/v/ds1621.svg?style=flat)](http://npmjs.com/package/ds1621) [![Downloads](http://img.shields.io/npm/dm/ds1621.svg)](http://npmjs.com/package/ds1621) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K5PAV5V7WGWFL)

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

## Testing

Install mocha, then type
```bash
$ sudo mocha
```

## Donations
- PayPal: https://paypal.me/gyengus
- Bitcoin: 1QJzLBK9uQP4RthmKJRQwy3v5sd4XS4S7P
- Ethereum: 0x2bD68120A56acBf6Dbd11da2060228b8912C1e3C
