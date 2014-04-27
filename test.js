'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isWav = require('./index');

function check(filename) {
	return isWav(readChunk.sync(filename, 0, 12));
}

it("should detect WAV from Buffer", function () {
	assert(check('fixture.wav'));
	assert(!check('fixture.nwav'));
});
