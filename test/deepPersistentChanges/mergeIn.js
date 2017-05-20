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
          boo: 'lostInMerge'
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
    .mergeIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'a'])
  ).toEqual('b')
  expect(mapA
    .mergeIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'b'])
  ).toEqual('b')
  expect(mapA
    .mergeIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'c'])
  ).toEqual('c')
  expect(mapA
    .mergeIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'deepValues', 'foo'])
  ).toEqual('gar')
  expect(mapA
    .mergeIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'deepValues', 'boo'])
  ).toEqual(undefined)
  expect(mapA
    .mergeIn(['item', 'mergable'], mapB.getIn(['item', 'mergable']))
    .getIn(['item', 'unmerged', 'foo'])
  ).toEqual('bar')
  expect(mapB
    .mergeIn(['item', 'mergable'], mapA.getIn(['item', 'mergable']))
    .getIn(['item', 'mergable', 'c'])
  ).toEqual('c')
}
