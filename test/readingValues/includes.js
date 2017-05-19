import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({foo: 'bar'})
  expect(mySortedMap.includes('bar')).toEqual(true)
  expect(mySortedMap.contains('bar')).toEqual(true)
  expect(mySortedMap.includes('bur')).toEqual(false)
  expect(mySortedMap.contains('bur')).toEqual(false)
}
