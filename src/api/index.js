import readingValues from './readingValues'
import persistentChanges from './persistentChanges'
// import transientChanges from './transientChanges'
import sequenceAlgorithms from './sequenceAlgorithms'
import conversionToJavascriptTypes from './conversionToJavascriptTypes'
import iterators from './iterators'
import sideEffects from './sideEffects'
import reducingAValue from './reducingAValue'

export default {
  ...readingValues,
  ...persistentChanges,
  // ...transientChanges,
  ...sequenceAlgorithms,
  ...conversionToJavascriptTypes,
  ...iterators,
  ...sideEffects,
  ...reducingAValue
}
