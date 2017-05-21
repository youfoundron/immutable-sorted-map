import SortedMap from '../../src'

export default () => {
  const mapA = new SortedMap({a: 'a', b: 'b'})
  const mapB = mapA.map(val => val.toUpperCase())
  expect(mapB.get('a')).toEqual('A')
  expect(mapB.get('b')).toEqual('B')
}
