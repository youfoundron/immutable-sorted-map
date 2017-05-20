import I from 'immutable'
import Tree from '../src'
import classValues from './classValues'
import readingValues from './readingValues'
import readingDeepValues from './readingDeepValues'
import persistentChanges from './persistentChanges'

describe('SortedMap', () => {
  describe('Class values', classValues)
  describe('Reading values', readingValues)
  describe('Reading deep values', readingDeepValues)
  describe('Persistent changese', persistentChanges)

  describe('Deep persistent changes', () => {
    it('#setIn', () => {
      const treeA = new Tree().set('a', I.Map({foo: 'bar'}))
      expect(treeA.setIn(['a', 'foo'], 'rab').getIn(['a', 'foo'])).toEqual('rab')
    })
    it('#deleteIn', () => {
      const treeA = new Tree().set('a', I.Map({foo: 'bar'}))
      expect(treeA.deleteIn(['a', 'foo']).getIn(['a', 'foo'])).toEqual(undefined)
    })
    it('#updateIn', () => {
      const treeA = new Tree().set('a', I.Map({foo: 'bar'}))
      expect(treeA.updateIn(['a', 'foo'], val => val.toUpperCase()).getIn(['a', 'foo'])).toEqual('BAR')
    })
    it('#mergeIn', () => {
      const treeA = new Tree().set('a', I.Map({obj: I.Map({foo: 'bar'})}))
      const treeB = new Tree().set('a', I.Map({obj: I.Map({foo: 'car', goo: 'gar'})}))
      expect(treeA.mergeIn(['a', 'obj'], treeB.getIn(['a', 'obj'])).getIn(['a', 'obj', 'foo'])).toEqual('car')
    })
    it('#mergeDeepIn', () => {
      const treeA = new Tree().set('a', I.Map({obj: I.Map({foo: 'bar'})}))
      const treeB = new Tree().set('a', I.Map({obj: I.Map({foo: 'car', goo: 'gar'})}))
      expect(treeA.mergeDeepIn(['a'], treeB.getIn(['a'])).getIn(['a', 'obj', 'foo'])).toEqual('car')
      expect(treeA.mergeDeepIn(['a'], treeB.getIn(['a'])).getIn(['a', 'obj', 'goo'])).toEqual('gar')
    })
  })
})
