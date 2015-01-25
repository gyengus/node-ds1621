var DS1621 = function(options) {
	var i2c = require('i2c');
	this.device = options.device; // I2C bus device
	this.address = 0x48; // DS1621 slave address
	this.wire = new i2c(this.address, {device: this.device});
	this.init();
}

DS1621.prototype.init = function() {
	/*
		0xEE Start Convert T
		0xAC <- 0x00 Folyamatos mérés beállítása configba
	*/
	this.wire.writeByte(0xEE, function(err) {
		if (err) {
			console.log('DS1621 communication error: ' + err);
			return false;
		}
	});
	this.wire.writeBytes(0xAC, [0x00], function(err) {
		if (err) {
			console.log('DS1621 communication error: ' + err);
			return false;
		}
	});
} // init

DS1621.prototype.getTemp = function(callback) {
	this.wire.readBytes(0xAA, 2, function(err, res) {
		if (err) {
			console.log('DS1621 communication error: ' + err);
			return false;			
		} else {
			var temperature = res[0];
			if (res[1] == 128) temperature += 0.5;
			callback(temperature);
		}
	});
} // getTemp

DS1621.prototype.getHighPrecTemp = function(callback) {
	var temperature = 0;
	var count_per_c = 0;
	var count_remain = 0;
	var sensor = this;
	this.wire.readBytes(0xA8, 1, function(err, res) {
		if (err) {
			console.log('DS1621 communication error: ' + err);
			return false;			
		} else {
			count_remain = res[0];
			sensor.wire.readBytes(0xA9, 1, function(err, res) {
				if (err) {
					console.log('DS1621 communication error: ' + err);
					return false;			
				} else {
					count_per_c = res[0];
					sensor.wire.readBytes(0xAA, 2, function(err, res) {
						if (err) {
							console.log('DS1621 communication error: ' + err);
							return false;			
						} else {
							temperature = res[0] - 0.25 + ((count_per_c - count_remain) / count_per_c);
							callback(temperature);
						}
					});
				}
			});
		}
	});
} // getHighPrecTemp

module.exports = DS1621;
