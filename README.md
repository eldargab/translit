# translit

Text transliteration util.

## Installation

via component

```
component install eldargab/translit
```

via npm

```
npm install translit
```

## Example

```javascript
var translit = require('translit')({
  'И': 'I',
  'ж': 'zh',
  'е': 'e'
  'в': 'v',
  'c': 's',
  'к': 'k'
})
translit('Ижевск') //=> Izhevsk
```

Or vice versa

```javascript
var translit = require('translit')({
  'I': 'И',
  'zh': 'ж'
})
translit('Izh') //=> Иж
```

You can also provide fallback function for replacing unknown characters

```javascript
var translit = require('translit')({}, {
  fallback: char => char.toUpperCase()
})

translit('hello') //=> HELLO
```

## Related

  * [translit-russian](https://github.com/eldargab/translit-russian) - Russian transliteration map

## License

MIT
