import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    b: 'bye',
    a: 'aye',
    c: 'cye'
  })
  const entries = mySortedMap.entrySeq()
  expect(entries.get(0)[0]).toEqual('a')
  expect(entries.get(0)[1]).toEqual('aye')
  expect(entries.get(1)[0]).toEqual('b')
  expect(entries.get(1)[1]).toEqual('bye')
  expect(entries.get(2)[0]).toEqual('c')
  expect(entries.get(2)[1]).toEqual('cye')
}
