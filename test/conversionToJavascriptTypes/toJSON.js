import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({a: 'a', b: 'b'})
  const asJSON = mySortedMap.toJSON()
  expect(asJSON.a).toEqual('a')
  expect(asJSON.b).toEqual('b')
}
