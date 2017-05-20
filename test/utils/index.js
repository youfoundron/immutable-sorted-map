import isMap from './isMap'
import isTreeMap from './isTreeMap'
import search from './search'
import getMinNode from './getMinNode'
import getMaxNode from './getMaxNode'
import calculateSize from './calculateSize'
import traverseByDepth from './traverseByDepth'
import entriesToTreeMap from './entriesToTreeMap'

export default () => {
  it('#isMap', isMap)
  it('#isTreeMap', isTreeMap)
  it('#search', search)
  it('#getMinNode', getMinNode)
  it('#getMaxNode', getMaxNode)
  it('#calculateSize', calculateSize)
  it('#traverseByDepth', traverseByDepth)
  it('#entriesToTreeMap', entriesToTreeMap)
}
