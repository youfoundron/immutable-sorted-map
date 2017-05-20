import readingValues from './readingValues'
import persistentChanges from './persistentChanges'
import reducingAValue from './reducingAValue'

export default {
  ...readingValues,
  ...persistentChanges,
  ...reducingAValue
}
