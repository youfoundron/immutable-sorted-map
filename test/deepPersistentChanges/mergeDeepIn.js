import { fromJS } from 'immutable'
import SortedMap from '../../src'

export default () => {
  const mapA = new SortedMap(fromJS({
    item: {
      unmerged: { foo: 'bar' },
      mergable: {
        a: 'a',
        b: 'b',
        deepValues: {
          foo: 'bar',
          boo: 'notLostInMerge'
        }
      }
    }
  }))
  const mapB = new SortedMap(fromJS({
    item: {
      unmerged: { foo: 'gar' },
      mergable: {
        a: 'b',
        c: 'c',
        deepValues: {
          foo: 'gar'
        }
      }
    }
  }))
  expect(mapA
    .mergeDeepIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'a'])
  ).toEqual('b')
  expect(mapA
    .mergeDeepIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'b'])
  ).toEqual('b')
  expect(mapA
    .mergeDeepIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'c'])
  ).toEqual('c')
  expect(mapA
    .mergeDeepIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'deepValues', 'foo'])
  ).toEqual('gar')
  expect(mapA
    .mergeDeepIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'deepValues', 'boo'])
  ).toEqual('notLostInMerge')
  expect(mapA
    .mergeDeepIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'unmerged', 'foo'])
  ).toEqual('bar')
  expect(mapB
    .mergeDeepIn(['item', 'mergable'], mapA.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'c'])
  ).toEqual('c')
}
