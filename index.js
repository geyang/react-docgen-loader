/**
 * created by Ge on 2016/06/24
 */
var docgen = require('react-docgen');
var loaderUtils = require('loader-utils');

module.exports = function ( source ) {

	this.cacheable && this.cacheable();
	var query = loaderUtils.parseQuery(this.query);

	var value = {};

	try {
		value = docgen.parse(source);
	} catch ( e ) {
		console.log('ERROR in docgen-loader',  e);
	}

	return "module.exports = " + JSON.stringify(value, undefined, "\t");
};
