import { Map } from 'extendable-immutable'
import api from './api'
import * as util from './util'

class Tree extends Map {
  constructor (root) {
    super(util.isMap(root) ? root.toJS() : root)
    this.klass = Tree
    this.root = this.isMap(root) ? root : Map(root)
    this.size = this.calculateSize()
  }
}

/* Util
** *********************** */
Tree.prototype.isMap = util.isMap
Tree.prototype.search = util.search
Tree.prototype.getMinNode = util.getMinNode
Tree.prototype.getMaxNode = util.getMaxNode
Tree.prototype.calculateSize = util.calculateSize
Tree.prototype.traverseByDepth = util.traverseByDepth
Tree.prototype.traverseByBreadth = util.traverseByBreadth

/* Reading values
** *********************** */
Tree.prototype.get = api.get
Tree.prototype.has = api.has
// Tree.prototype.includes = api.includes
Tree.prototype.first = api.first
Tree.prototype.last = api.last

/* Reading deep values
** *********************** */
// Tree.prototype.getIn = api.getIn
// Tree.prototype.hasIn = api.hasIn

/* Persistent changes
** *********************** */
Tree.prototype.set = api.set
Tree.prototype.delete = api.delete
Tree.prototype.remove = api.delete
Tree.prototype.deleteAll = api.deleteAll
Tree.prototype.removeAll = api.deleteAll
Tree.prototype.clear = api.clear
// Tree.prototype.update = api.update
Tree.prototype.merge = api.merge
// Tree.prototype.mergeWith = api.mergeWith
// Tree.prototype.mergeDeep = api.mergeDeep
// Tree.prototype.mergeDeepWith = api.mergeDeepWith

/* Deep persistent changes
** *********************** */
// Tree.prototype.setIn = api.setIn
// Tree.prototype.deleteIn = api.deleteIn
// Tree.prototype.updateIn = api.updateIn
// Tree.prototype.mergeIn = api.mergeIn
// Tree.prototype.mergeDeepIn = api.mergeDeepIn

/* Transient changes
** *********************** */
// Tree.prototype.withMutations = api.withMutations
// Tree.prototype.asMutable = api.asMutable
// Tree.prototype.asImmutable = api.asImmutable

/* Sequence algorithms
** *********************** */
// Tree.prototype.concat = api.concat
// Tree.prototype.map = api.map
// Tree.prototype.mapKeys = api.mapKeys
// Tree.prototype.mapEntries = api.mapEntries
// Tree.prototype.flatMap = api.flatMap
// Tree.prototype.filter = api.filter
// Tree.prototype.filterNot = api.filterNot
// Tree.prototype.reverse = api.reverse
// Tree.prototype.sort = api.sort
// Tree.prototype.sortBy = api.sortBy
// Tree.prototype.groupBy = api.groupBy

/* Conversion to Javascript types
** *********************** */
// Tree.prototype.toJS = api.toJS
// Tree.prototype.toJSON = api.toJSON
// Tree.prototype.toArray = api.toArray
// Tree.prototype.toObject = api.toObject

/* Conversion to Sequence
** *********************** */
// Tree.prototype.toSeq = api.toSeq
// Tree.prototype.toKeyedSeq = api.toKeyedSeq
// Tree.prototype.toIndexedSeq = api.toIndexedSeq
// Tree.prototype.toSetSeqp = api.toSetSeqp

/* Sequence functions
** *********************** */
// Tree.prototype.flip = api.flip
// [Symbol.iterator]()

/* Value equality
** *********************** */
// Tree.prototype.equals = api.equals
// Tree.prototype.hashCode = api.hashCode

/* Conversion to Collections
** *********************** */
// Tree.prototype.toMap = api.toMap
// Tree.prototype.toOrderedMap = api.toOrderedMap
// Tree.prototype.toSet = api.toSet
// Tree.prototype.toOrderedSet = api.toOrderedSet
// Tree.prototype.toList = api.toList
// Tree.prototype.toStack = api.toStack

/* Iterators
** *********************** */
// Tree.prototype.keys = api.keys
// Tree.prototype.values = api.values
// Tree.prototype.entries = api.entries

/* Collections (Seq)
** *********************** */
// Tree.prototype.keySeq = api.keySeq
// Tree.prototype.valueSeq = api.valueSeq
// Tree.prototype.entrySeq = api.entrySeq

/* Side effects
** *********************** */
// Tree.prototype.forEach = api.forEach

/* Creating subsets
** *********************** */
// Tree.prototype.slice = api.slice
// Tree.prototype.rest = api.rest
// Tree.prototype.butLast = api.butLast
// Tree.prototype.skip = api.skip
// Tree.prototype.skipLast = api.skipLast
// Tree.prototype.skipWhile = api.skipWhile
// Tree.prototype.skipUntil = api.skipUntil
// Tree.prototype.take = api.take
// Tree.prototype.takeLast = api.takeLast
// Tree.prototype.takeWhile = api.takeWhile
// Tree.prototype.takeUntil = api.takeUntil

/* Combination
** *********************** */
// Tree.prototype.flatten = api.flatten

/* Reducing a value
** *********************** */
// Tree.prototype.reduce = api.reduce
// Tree.prototype.reduceRight = api.reduceRight
// Tree.prototype.every = api.every
// Tree.prototype.some = api.some
// Tree.prototype.join = api.join
// Tree.prototype.isEmpty = api.isEmpty
// Tree.prototype.count = api.count
// Tree.prototype.countBy = api.countBy

/* Search for value
** *********************** */
// Tree.prototype.find = api.find
// Tree.prototype.findLast = api.findLast
// Tree.prototype.findEntry = api.findEntry
// Tree.prototype.findLastEntry = api.findLastEntry
// Tree.prototype.findKey = api.findKey
// Tree.prototype.findLastKey = api.findLastKey
// Tree.prototype.keyOf = api.keyOf
// Tree.prototype.lastKeyOf = api.lastKeyOf
// Tree.prototype.max = api.max
// Tree.prototype.maxBy = api.maxBy
// Tree.prototype.min = api.min
// Tree.prototype.minBy = api.minBy

export default Tree
