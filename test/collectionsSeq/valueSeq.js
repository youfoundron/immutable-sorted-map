import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    b: 'bye',
    a: 'aye',
    c: 'cye'
  })
  const valueSeq = mySortedMap.valueSeq()
  expect(valueSeq.get(0)).toEqual('aye')
  expect(valueSeq.get(1)).toEqual('bye')
  expect(valueSeq.get(2)).toEqual('cye')
}
