
module.exports = Cycle

function Cycle(arr) {
  if (!(this instanceof Cycle)) return new Cycle(arr)
  var _arr = arr

  var _index = 0
  Object.defineProperty(this, 'index', {
    get: function() { return _index },
    set: function(val) {
      if (typeof val != 'number') return
      var l = _arr.length
      var k = l - 1
      while (val < 0) val += l
      while (val > k) val -= l
      _index = val
    }
  })
  Object.defineProperty(this, 'values', {
    get: function() {
      var k = this.keys
      return {
        curr: _arr[k.curr],
        prev: _arr[k.prev],
        next: _arr[k.next]
      }
    }
  })
  Object.defineProperty(this, 'keys', {
    get: function() {
      var k = _arr.length - 1
      return {
        curr: _index,
        prev: _index == 0 ? k : _index - 1,
        next: _index == k ? 0 : _index + 1
      }
    }
  })
  Object.defineProperty(this, 'last', {
    get: function() {
      var k = _arr.length - 1
      return {
        key: k,
        value: _arr[k]
      }
    }
  })
}
