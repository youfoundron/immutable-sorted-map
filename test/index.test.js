import utils from './utils'
import classValues from './classValues'
import readingValues from './readingValues'
import readingDeepValues from './readingDeepValues'
import persistentChanges from './persistentChanges'
import deepPersistentChanges from './deepPersistentChanges'
import sideEffects from './sideEffects'

describe('SortedMap', () => {
  describe('Utility functions', utils)
  describe('Class values', classValues)
  describe('Reading values', readingValues)
  describe('Reading deep values', readingDeepValues)
  describe('Persistent changese', persistentChanges)
  describe('Deep persistent changes', deepPersistentChanges)
  describe('Side effects', sideEffects)
})
