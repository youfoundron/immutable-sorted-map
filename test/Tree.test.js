import Node from '../src/Node'
import Tree from '../src/Tree'

describe('Tree', () => {
  let myNode = new Node('foo', 'bar')
  let myTree = new Tree(myNode)

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
  })

  describe('Persistent changes', () => {
    it('#set', () => {
      let _myTree = myTree.set('moo', 'cow')
      expect(_myTree.size).toEqual(2)
      expect(_myTree.get('moo')).toEqual('cow')
    })
  })
})
