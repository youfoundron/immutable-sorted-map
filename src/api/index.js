import readingValues from './readingValues'
import persistentChanges from './persistentChanges'
// import transientChanges from './transientChanges'
import iterators from './iterators'
import sideEffects from './sideEffects'
import reducingAValue from './reducingAValue'

export default {
  ...readingValues,
  ...persistentChanges,
  // ...transientChanges,
  ...iterators,
  ...sideEffects,
  ...reducingAValue
}
