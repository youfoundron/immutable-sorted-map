import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    'a': 'aye',
    'b': 'bye'
  })
  expect(mySortedMap.search('a').get('key')).toEqual('a')
  expect(mySortedMap.search('a').get('value')).toEqual('aye')
  expect(mySortedMap.search('b').get('key')).toEqual('b')
  expect(mySortedMap.search('b').get('value')).toEqual('bye')
}
