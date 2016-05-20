var DEFAULT_DEFAULTS = {
  'Date': new Date(),
  'Boolean': false,
  'Number': 0,
  'String': '',
  'Array': []
};

module.exports = function(schema, options) {
  for (var path in schema.paths) {
    if (!schema.paths[path].defaultValue) {
      schema.paths[path].defaultValue = options[field.instance] || DEFAULT_DEFAULTS[field.instance];
    }
  }
}
