import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    d: 'dee',
    b: 'bee',
    f: 'fee',
    z: 'zee'
  })
  expect(mySortedMap.delete('d').get('d')).toEqual(undefined)
  expect(mySortedMap.delete('b').get('b')).toEqual(undefined)
  expect(mySortedMap.delete('f').get('f')).toEqual(undefined)
  expect(mySortedMap.delete('z').get('z')).toEqual(undefined)
  expect(mySortedMap.remove('d').get('d')).toEqual(undefined)
  expect(mySortedMap.remove('b').get('b')).toEqual(undefined)
  expect(mySortedMap.remove('f').get('f')).toEqual(undefined)
  expect(mySortedMap.remove('z').get('z')).toEqual(undefined)
}
