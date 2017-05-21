import readingValues from './readingValues'
import persistentChanges from './persistentChanges'
// import transientChanges from './transientChanges'
import sequenceAlgorithms from './sequenceAlgorithms'
import iterators from './iterators'
import sideEffects from './sideEffects'
import reducingAValue from './reducingAValue'

export default {
  ...readingValues,
  ...persistentChanges,
  // ...transientChanges,
  ...sequenceAlgorithms,
  ...iterators,
  ...sideEffects,
  ...reducingAValue
}
