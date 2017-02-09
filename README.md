# object-fill

Fills an existing object with new properties, but only for the keys that already exist.

This also works recursive.

--------------------------------------------------------------------------------

# Install

**NPM**<br>
`npm install --save object-fill`

**Yarn**<br>
`yarn add object-fill`

# Documentation

## const newDestination = objectFill(destination, source)

destination: the existing object<br>
source: the data that is inserted into the destination

returns: the new object

## Example

```javascript
const objectFill = require('object-fill');

const destination = {
    foo: 'something',
    bar: 'another thing',
};

const source = {
    bar: 'a new string',
    baz: 'an irrelevant string',
}

const newDestination = objectFill(destination, source);

/* newDestination:
 * {
 *     foo: 'something',
 *     bar: 'a new string'
 * }
 */
```

--------------------------------------------------------------------------------

License: MIT
