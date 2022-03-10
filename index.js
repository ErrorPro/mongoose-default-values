var DEFAULT_DEFAULTS = {
  'Date': new Date(),
  'Boolean': false,
  'Number': 0,
  'String': '',
  'Array': []
};
var DEFAULT_IGNORES = [];

module.exports = function(schema, options, ignores) {
  var extentedOptions = Object.assign({}, DEFAULT_DEFAULTS, options);
  var extendedIgnores = Object.assign([], DEFAULT_IGNORES, ignores);

  for (var path in schema.paths) {
    if (extendedIgnores.indexOf(path) === -1) {
      var field = schema.paths[path];
      if (!field.defaultValue) {
        schema.paths[path].defaultValue = extentedOptions[field.instance];
      }
    }
  }
}
