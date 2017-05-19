import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({foo: 'bar'})
  expect(mySortedMap.get('foo')).toEqual('bar')
  expect(mySortedMap.get('notSet')).toEqual(undefined)
  expect(mySortedMap.get('notSet', 'notSet')).toEqual('notSet')
}
