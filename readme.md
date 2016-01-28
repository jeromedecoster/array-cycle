# array-cycle

> Simple wrapper utility to navigate and cycle an array

## Install

```bash
npm i array-cycle
```

## API

#### constructor(array)

```js
const Cycle = require('array-cycle')

var cycle = new Cycle(['a', 'b', 'c', 'd'])

// also allowed
var cycle = Cycle(['a', 'b', 'c', 'd'])
```

#### index

Getter/setter to navigate the array. Loop if out of range

```js
var cycle = Cycle(['a', 'b', 'c', 'd'])

// 0
cycle.index

cycle.index = 1

// 1
cycle.index

cycle.index -= 2

// 3
cycle.index
```

#### keys

Getter. Return an object containing the current, next and previous indexes

```js
var cycle = Cycle(['a', 'b', 'c', 'd'])

/*
{
  curr: 0,
  next: 1,
  prev: 3
}
*/
cycle.keys
```

#### values

Getter. Return an object containing the current, next and previous values

```js
var cycle = Cycle(['a', 'b', 'c', 'd'])

/*
{
  curr: 'a',
  next: 'b',
  prev: 'd'
}
*/
cycle.values
```

#### last

Getter. Return an object containing the index and value of the last item

```js
var cycle = Cycle(['a', 'b', 'c', 'd'])

/*
{
  key: 3,
  value: 'd'
}
*/
cycle.values
```

## Example

```js
const Cycle = require('array-cycle')

var cycle = Cycle(['a', 'b', 'c', 'd'])

// 0
cycle.index

/*
{
  curr: 0,
  next: 1,
  prev: 3
}
*/
cycle.keys

/*
{
  curr: 'a',
  next: 'b',
  prev: 'd'
}
*/
cycle.values

/*
{
  key: 3,
  value: 'd'
}
*/
cycle.last

// walk one step forward
cycle.index++

// 1
cycle.index

/*
{
  curr: 1,
  next: 2,
  prev: 0
}
*/
cycle.keys

// walk three steps forward (and loop to the beginning)
cycle.index += 3

/*
{
  curr: 0,
  next: 1,
  prev: 3
}
*/
cycle.keys
```


## License

MIT
