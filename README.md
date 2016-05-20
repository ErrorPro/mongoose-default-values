## Mongoose default values.

This plugin sets all default value for all schema's fields.

## Install

```
  npm i mongoose-default-values
```

```
  var mongoose-default-values = require('mongoose-default-values');

  Schema.plugin(mongoose-default-values, {'String': 'defaultValue'});
```

## API

Options contain all values for all types. If there is no provided value then plugin will take it from defaults.
