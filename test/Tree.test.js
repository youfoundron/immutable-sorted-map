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
