import I from 'immutable'
import Tree from '../src/Tree'

describe('Tree', () => {
  const myTree = new Tree({foo: 'bar'})

  describe('Class values', () => {
    it('#klass', () => {
      expect(myTree.klass).toEqual(Tree)
    })
    it('#root', () => {
      expect(myTree.root.toJS().value).toEqual('bar')
    })
    it('#size', () => {
      expect(myTree.size).toEqual(1)
    })
  })

  describe('Reading values', () => {
    it('#get', () => {
      expect(myTree.get('foo')).toEqual('bar')
      expect(myTree.get('nope')).toEqual(undefined)
      expect(myTree.get('nope', 'notSet')).toEqual('notSet')
    })
    it('#has', () => {
      expect(myTree.has('foo')).toEqual(true)
      expect(myTree.has('nope')).toEqual(false)
    })
    it('#includes', () => {
      expect(myTree.includes('bar')).toEqual(true)
      expect(myTree.contains('bar')).toEqual(true)
    })
    it('#first', () => {
      expect(myTree.first()).toEqual('bar')
      const _myTree = myTree.set('moo', 'cow').set('aaa', 'car')
      expect(_myTree.first()).toEqual('car')
    })
    it('#last', () => {
      expect(myTree.last()).toEqual('bar')
      const _myTree = myTree.set('moo', 'cow').set('aaa', 'car')
      expect(_myTree.last()).toEqual('cow')
    })
  })

  describe('Reading deep values', () => {
    it('#getIn', () => {
      const _myTree = myTree.set('moo', I.Map({soundOf: 'cow'}))
      expect(_myTree.getIn(['moo', 'soundOf'])).toEqual('cow')
      expect(_myTree.getIn(['moo', 'nope'])).toEqual(undefined)
      expect(_myTree.getIn(['moo', 'node'], 'notSet')).toEqual('notSet')
    })
    it('#hasIn', () => {
      const _myTree = myTree.set('moo', I.Map({soundOf: 'cow'}))
      expect(_myTree.hasIn(['moo', 'soundOf'])).toEqual(true)
      expect(_myTree.hasIn(['moo', 'nope'])).toEqual(false)
    })
  })

  describe('Persistent changes', () => {
    it('#set', () => {
      const _myTree = myTree.set('moo', 'cow')
      expect(_myTree.size).toEqual(2)
      expect(_myTree.get('moo')).toEqual('cow')
      expect(_myTree.set('moo', 'pig').get('moo')).toEqual('pig')
    })
    it('#delete', () => {
      const tree = new Tree({'d': 'dee'})
        .set('b', 'bee').set('f', 'fee').set('e', 'ear')
      expect(tree.delete('d').get('d')).toEqual(undefined)
      expect(tree.delete('b').get('b')).toEqual(undefined)
      expect(tree.delete('f').get('f')).toEqual(undefined)
      expect(tree.delete('e').get('e')).toEqual(undefined)
      expect(tree.remove('d').get('d')).toEqual(undefined)
      expect(tree.remove('b').get('b')).toEqual(undefined)
      expect(tree.remove('f').get('f')).toEqual(undefined)
      expect(tree.remove('e').get('e')).toEqual(undefined)
    })
    it('#deleteAll', () => {
      const tree = new Tree({'d': 'dee'})
        .set('b', 'bee').set('f', 'fee').set('e', 'ear')
      expect(tree.deleteAll(['f', 'd']).get('f')).toEqual(undefined)
      expect(tree.deleteAll(['f', 'd']).get('d')).toEqual(undefined)
      expect(tree.deleteAll(['e', 'b']).get('e')).toEqual(undefined)
      expect(tree.deleteAll(['e', 'b']).get('b')).toEqual(undefined)
      expect(tree.removeAll(['f', 'd']).get('f')).toEqual(undefined)
      expect(tree.removeAll(['f', 'd']).get('d')).toEqual(undefined)
      expect(tree.removeAll(['e', 'b']).get('e')).toEqual(undefined)
      expect(tree.removeAll(['e', 'b']).get('b')).toEqual(undefined)
    })
    it('#clear', () => {
      expect(myTree.clear().root.isEmpty()).toEqual(true)
    })
    it('#update', () => {
      expect(myTree.update('foo', value => value.toUpperCase()).get('foo')).toEqual(myTree.get('foo').toUpperCase())
      expect(myTree.update('boo', 'mama', value => value.toUpperCase()).get('boo')).toEqual('MAMA')
    })
    it('#merge', () => {
      const treeA = new Tree().set('a', 'a').set('b', 'b')
      const treeB = new Tree().set('a', 'b').set('c', 'c')
      expect(treeA.merge(treeB).get('a')).toEqual('b')
      expect(treeB.merge(treeA).get('a')).toEqual('a')
    })
    it('#mergeWith', () => {
      const treeA = new Tree().set('a', 'a').set('b', 'b')
      const treeB = new Tree().set('a', 'b').set('c', 'c')
      expect(treeA.mergeWith((oldValue, newValue) =>
        oldValue < newValue ? oldValue : newValue, treeB
      ).get('a')).toEqual('a')
      expect(treeB.mergeWith((oldValue, newValue) =>
        oldValue < newValue ? oldValue : newValue, treeA
      ).get('a')).toEqual('a')
    })
    it('#mergeDeep', () => {
      const treeA = new Tree().set('a', {obj: {foo: 'bar', boo: 'far'}})
      const treeB = new Tree().set('a', {obj: {foo: 'bar', boo: 'car', goo: 'gar'}})
      expect(treeA.mergeDeep(treeB).get('a').obj.boo).toEqual('car')
      expect(treeA.mergeDeep(treeB).get('a').obj.goo).toEqual('gar')
      expect(treeB.mergeDeep(treeA).get('a').obj.boo).toEqual('far')
    })
    it('#mergeDeepWith', () => {
      const treeA = new Tree().set('a', I.Map({foo: 'bar', boo: 'far'}))
      const treeB = new Tree().set('a', I.Map({foo: 'bar', boo: 'car', goo: 'gar'}))
      expect(treeA.mergeDeepWith((x, y) => x > y ? x : y, treeB).getIn(['a', 'boo'])).toEqual('far')
      expect(treeA.mergeDeepWith((x, y) => x > y ? x : y, treeB).getIn(['a', 'goo'])).toEqual('gar')
      expect(treeB.mergeDeepWith((x, y) => x > y ? x : y, treeA).getIn(['a', 'boo'])).toEqual('far')
    })
  })
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
  })
})
