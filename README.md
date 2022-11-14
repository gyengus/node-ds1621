# node-ds1621

[![NPM version](https://img.shields.io/npm/v/ds1621.svg?style=flat)](http://npmjs.com/package/ds1621) 
[![Downloads](http://img.shields.io/npm/dm/ds1621.svg)](http://npmjs.com/package/ds1621)

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

## Tips
- Bitcoin: bc1qx4q5epl7nsyu9mum8edrvp2my8tut0enrz7kcn
- EVM compatible (Ethereum, Fantom, Polygon, etc.): 0x9F0a70A7306DF3fc072446cAF540F6766a4CC4E8
- Litecoin: ltc1qk2gf43u3lw6vzhvah03wns0nkgetg2c7ea0w5r
- Solana: 14SHwk3jTNYdMkEvpbq1j7Eu9iUJ3GySnaBF4kqBR8Ah
- Flux: t1T3x4HExm4nWD7gN68px9zCF3ZFQyneFSK
