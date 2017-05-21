import SortedMap from '../../src'

export default () => {
  const mapA = new SortedMap({a: 'a', c: 'c'})
  const mapB = new SortedMap({b: 'b', d: 'd'})
  expect(mapA.concat(mapB).first()).toEqual('a')
  expect(mapA.concat(mapB).last()).toEqual('d')
}
