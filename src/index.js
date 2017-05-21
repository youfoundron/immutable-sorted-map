import { Map as ExtendableMap } from 'extendable-immutable'
import { Map } from 'immutable'
import api from './api'
import * as util from './util'

class SortedMap extends ExtendableMap {
  constructor (data = {}, compareKeys = util.compareKeys) {
    const entries = util.isMap(data)
      ? data.entries() : Object.entries(data)
    const treeMap = util.isTreeMap(data)
      ? Map(data) : util.entriesToTreeMap(entries, compareKeys)
    super(treeMap)
    this.klass = SortedMap
    this.root = treeMap
    this.size = this.calculateSize()
  }
}

/* Util
** *********************** */
SortedMap.prototype.isMap = util.isMap
SortedMap.prototype.search = util.search
SortedMap.prototype.getMinNode = util.getMinNode
SortedMap.prototype.getMaxNode = util.getMaxNode
SortedMap.prototype.calculateSize = util.calculateSize
SortedMap.prototype.traverseByDepth = util.traverseByDepth

/* Reading values
** *********************** */
SortedMap.prototype.get = api.get
SortedMap.prototype.has = api.has
// SortedMap.prototype.includes = api.includes
SortedMap.prototype.first = api.first
SortedMap.prototype.last = api.last

/* Reading deep values
** *********************** */
// SortedMap.prototype.getIn = api.getIn
// SortedMap.prototype.hasIn = api.hasIn

/* Persistent changes
** *********************** */
SortedMap.prototype.set = api.set
SortedMap.prototype.delete = api.delete
SortedMap.prototype.remove = api.delete
SortedMap.prototype.deleteAll = api.deleteAll
SortedMap.prototype.removeAll = api.deleteAll
SortedMap.prototype.clear = api.clear
// SortedMap.prototype.update = api.update
SortedMap.prototype.merge = api.merge
SortedMap.prototype.mergeWith = api.mergeWith
SortedMap.prototype.mergeDeep = api.mergeDeep
SortedMap.prototype.mergeDeepWith = api.mergeDeepWith

/* Deep persistent changes
** *********************** */
// SortedMap.prototype.setIn = api.setIn
// SortedMap.prototype.deleteIn = api.deleteIn
// SortedMap.prototype.updateIn = api.updateIn
// SortedMap.prototype.mergeIn = api.mergeIn
// SortedMap.prototype.mergeDeepIn = api.mergeDeepIn

/* Transient changes
** *********************** */
// SortedMap.prototype.withMutations = api.withMutations
// SortedMap.prototype.asMutable = api.asMutable
// SortedMap.prototype.asImmutable = api.asImmutable

/* Sequence algorithms
** *********************** */
SortedMap.prototype.concat = api.concat
SortedMap.prototype.map = api.map
// SortedMap.prototype.mapKeys = api.mapKeys
// SortedMap.prototype.mapEntries = api.mapEntries
// SortedMap.prototype.flatMap = api.flatMap
// SortedMap.prototype.filter = api.filter
// SortedMap.prototype.filterNot = api.filterNot
// SortedMap.prototype.reverse = api.reverse
// SortedMap.prototype.sort = api.sort
// SortedMap.prototype.sortBy = api.sortBy
// SortedMap.prototype.groupBy = api.groupBy

/* Conversion to Javascript types
** *********************** */
SortedMap.prototype.toJS = api.toJS
SortedMap.prototype.toJSON = api.toJSON
SortedMap.prototype.toArray = api.toArray
SortedMap.prototype.toObject = api.toObject

/* Conversion to Sequence
** *********************** */
// SortedMap.prototype.toSeq = api.toSeq
// SortedMap.prototype.toKeyedSeq = api.toKeyedSeq
// SortedMap.prototype.toIndexedSeq = api.toIndexedSeq
// SortedMap.prototype.toSetSeqp = api.toSetSeqp

/* Sequence functions
** *********************** */
// SortedMap.prototype.flip = api.flip
// SortedMap[Symbol.iterator] = api[Symbol.iterator]

/* Value equality
** *********************** */
// SortedMap.prototype.equals = api.equals
// SortedMap.prototype.hashCode = api.hashCode

/* Conversion to Collections
** *********************** */
// SortedMap.prototype.toMap = api.toMap
// SortedMap.prototype.toOrderedMap = api.toOrderedMap
// SortedMap.prototype.toSet = api.toSet
// SortedMap.prototype.toOrderedSet = api.toOrderedSet
// SortedMap.prototype.toList = api.toList
// SortedMap.prototype.toStack = api.toStack

/* Iterators
** *********************** */
SortedMap.prototype.keys = api.keys
SortedMap.prototype.values = api.values
SortedMap.prototype.entries = api.entries

/* Collections (Seq)
** *********************** */
SortedMap.prototype.keySeq = api.keySeq
SortedMap.prototype.valueSeq = api.valueSeq
SortedMap.prototype.entrySeq = api.entrySeq

/* Side effects
** *********************** */
SortedMap.prototype.forEach = api.forEach

/* Creating subsets
** *********************** */
// SortedMap.prototype.slice = api.slice
// SortedMap.prototype.rest = api.rest
// SortedMap.prototype.butLast = api.butLast
// SortedMap.prototype.skip = api.skip
// SortedMap.prototype.skipLast = api.skipLast
// SortedMap.prototype.skipWhile = api.skipWhile
// SortedMap.prototype.skipUntil = api.skipUntil
// SortedMap.prototype.take = api.take
// SortedMap.prototype.takeLast = api.takeLast
// SortedMap.prototype.takeWhile = api.takeWhile
// SortedMap.prototype.takeUntil = api.takeUntil

/* Combination
** *********************** */
// SortedMap.prototype.flatten = api.flatten

/* Reducing a value
** *********************** */
// SortedMap.prototype.reduce = api.reduce
// SortedMap.prototype.reduceRight = api.reduceRight
// SortedMap.prototype.every = api.every
// SortedMap.prototype.some = api.some
// SortedMap.prototype.join = api.join
SortedMap.prototype.isEmpty = api.isEmpty
// SortedMap.prototype.count = api.count
// SortedMap.prototype.countBy = api.countBy

/* Search for value
** *********************** */
// SortedMap.prototype.find = api.find
// SortedMap.prototype.findLast = api.findLast
// SortedMap.prototype.findEntry = api.findEntry
// SortedMap.prototype.findLastEntry = api.findLastEntry
// SortedMap.prototype.findKey = api.findKey
// SortedMap.prototype.findLastKey = api.findLastKey
// SortedMap.prototype.keyOf = api.keyOf
// SortedMap.prototype.lastKeyOf = api.lastKeyOf
// SortedMap.prototype.max = api.max
// SortedMap.prototype.maxBy = api.maxBy
// SortedMap.prototype.min = api.min
// SortedMap.prototype.minBy = api.minBy

export default SortedMap
