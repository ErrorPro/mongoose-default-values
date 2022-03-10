<div align="center">
  <h1>Mongoose Default</h1>
  <p>Plugin for mongoose which sets up all default values for fields if default values were not provided.</p>
  
  [![npm version](https://badgen.net/npm/v/mongoose-default)](https://www.npmjs.com/package/mongoose-default)
  [![npm downloads](https://badgen.net/npm/dm/mongoose-default)](https://www.npmjs.com/package/mongoose-default)
  
</div>
## Mongoose default values.

This plugin sets all default value for all schema's fields.

## Install

```
  npm i mongoose-default
```

```
  const mongoosedefault = require('mongoose-default');

  Schema.plugin(mongoosedefault, {'String': 'defaultValue'},{'Number'});
```