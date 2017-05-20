import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    d: 'dee',
    b: 'bee',
    f: 'fee',
    z: 'zee'
  })
  expect(mySortedMap.deleteAll(['d', 'f']).get('d')).toEqual(undefined)
  expect(mySortedMap.deleteAll(['d', 'f']).get('f')).toEqual(undefined)
  expect(mySortedMap.deleteAll(['b', 'z']).get('b')).toEqual(undefined)
  expect(mySortedMap.deleteAll(['b', 'z']).get('z')).toEqual(undefined)
  expect(mySortedMap.removeAll(['d', 'f']).get('d')).toEqual(undefined)
  expect(mySortedMap.removeAll(['d', 'f']).get('f')).toEqual(undefined)
  expect(mySortedMap.removeAll(['b', 'z']).get('b')).toEqual(undefined)
  expect(mySortedMap.removeAll(['b', 'z']).get('z')).toEqual(undefined)
}
