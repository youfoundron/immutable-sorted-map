import readingValues from './readingValues'
import persistentChanges from './persistentChanges'
import sequenceAlgorithms from './sequenceAlgorithms'
import conversionToJavascriptTypes from './conversionToJavascriptTypes'
import collectionsSeq from './collectionsSeq'
import iterators from './iterators'
import sideEffects from './sideEffects'
import reducingAValue from './reducingAValue'

export default {
  ...readingValues,
  ...persistentChanges,
  ...sequenceAlgorithms,
  ...conversionToJavascriptTypes,
  ...collectionsSeq,
  ...iterators,
  ...sideEffects,
  ...reducingAValue
}
