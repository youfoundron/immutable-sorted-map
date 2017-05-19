import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({foo: 'bar'})
  expect(mySortedMap.first()).toEqual('bar')
  expect(mySortedMap.set('aaa', 'arr').first()).toEqual('arr')
}
