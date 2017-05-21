import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({a: 'a', b: 'b'})
  const asJS = mySortedMap.toJS()
  expect(asJS.a).toEqual('a')
  expect(asJS.b).toEqual('b')
}
