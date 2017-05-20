import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    'a': 'aye',
    'b': 'bye',
    'c': 'cye'
  })
  expect(mySortedMap.getMinNode().get('value')).toEqual('aye')
}
