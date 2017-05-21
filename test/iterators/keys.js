import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    b: 'bye',
    a: 'aye',
    c: 'cye'
  })
  const keys = []
  for (let key of mySortedMap.keys()) {
    keys.push(key)
  }
  expect(keys[0]).toEqual('a')
  expect(keys[1]).toEqual('b')
  expect(keys[2]).toEqual('c')
}
