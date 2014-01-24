
# word-count

  get a word-count from a string. `wc -w` for javascript. counts special characters.

## Installation

  Install with [component(1)](http://component.io):

    $ component install matthewmueller/word-count

## Example

```javascript
var wc = require('word-count');
assert(4 == wc('this is a string'))
```

## API

### `wc(str, [from], [to])`

Get the word count of `str`. Optionally specify `from` and `to` offsets.

```js
var str = 'lions, tigers, bears, oh my!';
assert(2 == wc(str, 6, 21));
```

## Tests

```
npm install component-test
make test
```

## License

  MIT
