import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap({
    'b': 'bye',
    'a': 'aye',
    'c': 'cye'
  })
  const ltr = []
  const rtl = []
  mySortedMap.traverseByDepth(node => ltr.push(node.get('value')))
  mySortedMap.traverseByDepth(node => rtl.push(node.get('value')), mySortedMap.root, false)
  expect(ltr[0]).toEqual('aye')
  expect(ltr[1]).toEqual('bye')
  expect(ltr[2]).toEqual('cye')
  expect(rtl[0]).toEqual('cye')
  expect(rtl[1]).toEqual('bye')
  expect(rtl[2]).toEqual('aye')
}
