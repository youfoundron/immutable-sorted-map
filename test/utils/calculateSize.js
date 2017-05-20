import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    'a': 'aye',
    'b': 'bye',
    'c': 'cye'
  })
  expect(mySortedMap.calculateSize()).toEqual(3)
}
