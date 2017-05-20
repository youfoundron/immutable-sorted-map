import SortedMap from '../../src'

export default () => {
  const mapA = new SortedMap({a: 'a', b: 'b'})
  const mapB = new SortedMap({a: 'b', c: 'c'})
  expect(mapA.merge(mapB).get('a')).toEqual('b')
  expect(mapB.merge(mapA).get('a')).toEqual('a')
  expect(mapA.merge(mapB).get('c')).toEqual('c')
}
