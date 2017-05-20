import SortedMap from '../../src'

export default () => {
  const mapA = new SortedMap({a: 'a', b: 'b'})
  const mapB = new SortedMap({a: 'b', c: 'c'})
  expect(mapA.mergeWith(
    (oldVal, newVal) =>
      oldVal < newVal ? oldVal : newVal
    , mapB
  ).get('a')).toEqual('a')
  expect(mapB.mergeWith(
    (oldVal, newVal) =>
      oldVal < newVal ? oldVal : newVal
    , mapA
  ).get('a')).toEqual('a')
}
