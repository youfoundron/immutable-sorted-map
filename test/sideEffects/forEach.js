import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    b: 'bye',
    a: 'aye',
    c: 'cye'
  })
  const values = []
  mySortedMap.forEach(value => values.push(value))
  expect(values[0]).toEqual('aye')
  expect(values[1]).toEqual('bye')
  expect(values[2]).toEqual('cye')
}
