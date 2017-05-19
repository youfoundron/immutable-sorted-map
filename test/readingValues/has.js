import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({foo: 'bar'})
  expect(mySortedMap.has('foo')).toEqual(true)
  expect(mySortedMap.has('notSet')).toEqual(false)
}
