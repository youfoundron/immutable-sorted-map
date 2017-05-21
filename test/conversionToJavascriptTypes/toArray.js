import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({a: 'a', b: 'b'})
  const asArray = mySortedMap.toArray()
  expect(asArray[0]).toEqual('a')
  expect(asArray[1]).toEqual('b')
}
