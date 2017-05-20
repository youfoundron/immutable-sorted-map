import { entriesToTreeMap, isTreeMap } from '../../src/util'

export default () => {
  const entries = [
    ['b', 'bye'],
    ['a', 'aye'],
    ['c', 'cye']
  ]
  const treeMap = entriesToTreeMap(entries)
  expect(isTreeMap(treeMap)).toEqual(true)
  expect(treeMap.get('key')).toEqual('b')
  expect(treeMap.get('value')).toEqual('bye')
  expect(treeMap.getIn(['left', 'key'])).toEqual('a')
  expect(treeMap.getIn(['left', 'value'])).toEqual('aye')
  expect(treeMap.getIn(['right', 'key'])).toEqual('c')
  expect(treeMap.getIn(['right', 'value'])).toEqual('cye')
}
