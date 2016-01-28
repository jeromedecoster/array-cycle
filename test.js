
const test = require('tape')
const Cycle = require('.')

const skip = false

test('cycle', {skip:skip}, function (t) {

  var a = ['a', 'b', 'c', 'd', 'e']

  var cycle = Cycle(a)

  t.equal(cycle.index, 0)

  t.deepEqual(cycle.keys, {
    curr: 0,
    next: 1,
    prev: 4
  })

  t.deepEqual(cycle.values, {
    curr: 'a',
    next: 'b',
    prev: 'e'
  })

  cycle.index = 1

  t.equal(cycle.index, 1)

  t.deepEqual(cycle.keys, {
    curr: 1,
    next: 2,
    prev: 0
  })

  t.deepEqual(cycle.values, {
    curr: 'b',
    next: 'c',
    prev: 'a'
  })

  cycle.index++

  t.equal(cycle.index, 2)

  t.deepEqual(cycle.keys, {
    curr: 2,
    next: 3,
    prev: 1
  })

  t.deepEqual(cycle.values, {
    curr: 'c',
    next: 'd',
    prev: 'b'
  })

  cycle.index += 2

  t.equal(cycle.index, 4)

  t.deepEqual(cycle.keys, {
    curr: 4,
    next: 0,
    prev: 3
  })

  t.deepEqual(cycle.values, {
    curr: 'e',
    next: 'a',
    prev: 'd'
  })

  cycle.index++

  t.equal(cycle.index, 0)

  t.deepEqual(cycle.keys, {
    curr: 0,
    next: 1,
    prev: 4
  })

  t.deepEqual(cycle.values, {
    curr: 'a',
    next: 'b',
    prev: 'e'
  })

  t.end()
})

test('out of range', {skip:skip}, function (t) {

  var a = ['a', 'b', 'c', 'd', 'e']

  var cycle = Cycle(a)

  cycle.index = -2

  t.equal(cycle.index, 3)

  t.deepEqual(cycle.keys, {
    curr: 3,
    next: 4,
    prev: 2
  })

  t.deepEqual(cycle.values, {
    curr: 'd',
    next: 'e',
    prev: 'c'
  })

  cycle.index -= 11

  t.equal(cycle.index, 2)

  t.deepEqual(cycle.keys, {
    curr: 2,
    next: 3,
    prev: 1
  })

  t.deepEqual(cycle.values, {
    curr: 'c',
    next: 'd',
    prev: 'b'
  })

  cycle.index += 6

  t.equal(cycle.index, 3)

  t.deepEqual(cycle.keys, {
    curr: 3,
    next: 4,
    prev: 2
  })

  t.deepEqual(cycle.values, {
    curr: 'd',
    next: 'e',
    prev: 'c'
  })

  t.end()
})

test('modify array', {skip:skip}, function (t) {

  var a = ['a', 'b', 'c', 'd', 'e']

  var cycle = Cycle(a)

  t.equal(cycle.index, 0)

  a.push('f')

  cycle.index--

  t.equal(cycle.index, 5)

  t.deepEqual(cycle.keys, {
    curr: 5,
    next: 0,
    prev: 4
  })

  t.deepEqual(cycle.values, {
    curr: 'f',
    next: 'a',
    prev: 'e'
  })

  t.end()
})

test('last', {skip:skip}, function (t) {

  var a = ['a', 'b', 'c', 'd', 'e']

  var cycle = Cycle(a)

  t.equal(cycle.index, 0)

  t.deepEqual(cycle.last, {
    key: 4,
    value: 'e'
  })

  t.equal(cycle.index, 0)

  cycle.index = cycle.last.key

  t.equal(cycle.index, 4)

  t.deepEqual(cycle.keys, {
    curr: 4,
    next: 0,
    prev: 3
  })

  t.deepEqual(cycle.values, {
    curr: 'e',
    next: 'a',
    prev: 'd'
  })

  a.push('f')

  t.deepEqual(cycle.last, {
    key: 5,
    value: 'f'
  })

  t.end()
})
