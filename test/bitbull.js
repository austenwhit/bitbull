var Buffer = require("buffer/").Buffer;
var should = require("should");
var bitbull = require("../index.js");

describe("bitbull JS", function () {

	it("should be ok", function () {
		(bitbull).should.be.ok;
	});

	it("should be object", function () {
		(bitbull).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(bitbull).should.have.property(property);
		});
	});

});
