# react-docgen loader for webpack

This is a simplified version of the `docgen-loader`, thanks to @eisisig.

## Usage

``` javascript
var docs = require("!!react-docgen!./HappySandwichMaker.js");
// => returns HappySandwichMaker.js documentation object if HappySandwichMaker definition is found
```

**NOTE**: use double !! to disable loaders specified in the `webpack.config.js` file.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
