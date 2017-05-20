import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    'a': 'aye',
    'b': 'bye',
    'c': 'cye'
  })
  expect(mySortedMap.getMaxNode().get('value')).toEqual('cye')
}
