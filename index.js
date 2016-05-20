var DEFAULT_DEFAULTS = {
  'Date': new Date(),
  'Boolean': false,
  'Number': 0,
  'String': '',
  'Array': []
};

module.exports = function(schema, options) {
  var extentedOptions = Object.assign({}, DEFAULT_DEFAULTS, options);

  for (var path in schema.paths) {
    var field = schema.paths[path];
    if (!field.defaultValue) {
      schema.paths[path].defaultValue = extentedOptions[field.instance];
    }
  }
}
