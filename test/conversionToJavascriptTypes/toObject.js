import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({a: 'a', b: 'b'})
  const asObject = mySortedMap.toObject()
  expect(asObject.a).toEqual('a')
  expect(asObject.b).toEqual('b')
}
