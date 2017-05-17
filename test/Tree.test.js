import I from 'immutable'
import Node from '../src/Node'
import Tree from '../src/Tree'

describe('Tree', () => {
  const myNode = new Node('foo', 'bar')
  const myTree = new Tree(myNode)

  describe('Class values', () => {
    it('#klass', () => {
      expect(myTree.klass).toEqual(Tree)
    })
    it('#root', () => {
      expect(myTree.root).toEqual(myNode)
    })
    it('#size', () => {
      expect(myTree.size).toEqual(1)
    })
  })

  describe('Reading values', () => {
    it('#get', () => {
      expect(myTree.get('foo')).toEqual(myNode.get('value'))
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
      const tree = new Tree(new Node('d', 'dee'))
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
      const tree = new Tree(new Node('d', 'dee'))
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
  })
})
