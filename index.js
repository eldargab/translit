
module.exports = function(map) {
  var keys = Object.keys(map).sort(function(a, b) {
    return b.length - a.length
  })

  function peek(str) {
    for (var i = 0; i < keys.length; i++) {
      if (startsWith(keys[i], str)) return keys[i]
    }
  }

  return function(str) {
    var out = ''
    while(str) {
      var key = peek(str)
      if (key) {
        out += map[key]
        str = str.slice(key.length)
      } else {
        out += str[0]
        str = str.slice(1)
      }
    }
    return out
  }
}

function startsWith(start, str) {
  for (var i = 0; i < start.length; i++) {
    if (start[i] != str[i]) return false
  }
  return true
}
