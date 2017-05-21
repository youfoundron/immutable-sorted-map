import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    b: 'bye',
    a: 'aye',
    c: 'cye'
  })
  const entries = []
  for (let entry of mySortedMap.entries()) {
    entries.push(entry)
  }
  expect(entries[0][0]).toEqual('a')
  expect(entries[0][1]).toEqual('aye')
  expect(entries[1][0]).toEqual('b')
  expect(entries[1][1]).toEqual('bye')
  expect(entries[2][0]).toEqual('c')
  expect(entries[2][1]).toEqual('cye')
}
