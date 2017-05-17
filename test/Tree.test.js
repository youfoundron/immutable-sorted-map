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
      /* Write tests for:
       * 0 children & 0 children root
       * 1 child & 1 child root
       * 2 children & 2 children root
       */
    })
  })
})
