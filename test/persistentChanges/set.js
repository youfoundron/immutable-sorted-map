import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({foo: 'bar'})
  expect(mySortedMap.set('foo', 'far').size).toEqual(1)
  expect(mySortedMap.set('foo', 'far').get('foo')).toEqual('far')
  expect(mySortedMap.set('moo', 'cow').size).toEqual(2)
  expect(mySortedMap.set('moo', 'cow').get('moo')).toEqual('cow')
}
