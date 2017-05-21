import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    b: 'bye',
    a: 'aye',
    c: 'cye'
  })
  const keySeq = mySortedMap.keySeq().map(k => k)
  expect(keySeq.get(0)).toEqual('a')
  expect(keySeq.get(1)).toEqual('b')
  expect(keySeq.get(2)).toEqual('c')
}
