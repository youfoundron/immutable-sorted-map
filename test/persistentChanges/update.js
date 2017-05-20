import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({foo: 'bar'})
  expect(mySortedMap.update('foo', val => val.toUpperCase()).get('foo')).toEqual('BAR')
  expect(mySortedMap.update('notSet', 'default', val => val.toUpperCase()).get('notSet')).toEqual('DEFAULT')
}
