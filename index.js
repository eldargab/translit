
module.exports = function(map, opts) {
  var fallback = (opts && opts.fallback) || function(char) { return char }

  var keys = Object.keys(map).sort(function(a, b) {
    return b.length - a.length
  })

  function peek(string, offset) {
    for (var i = 0; i < keys.length; i++) {
      if (match(keys[i], string, offset)) return keys[i]
    }
  }

  return function transliterate(string) {
    var out = ''
    var offset = 0
    while(offset < string.length) {
      var key = peek(string, offset)
      if (key) {
        out += map[key]
        offset += key.length
      } else {
        out += fallback(string[offset])
        offset += 1
      }
    }
    return out
  }
}


function match(key, string, offset) {
  for (var i = 0; i < key.length; i++) {
    if (key[i] != string[i + offset]) return false
  }
  return true
}
