import { fromJS } from 'immutable'
import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap(fromJS({
    item: {
      details: {
        model: 'acme',
        year: 1994
      }
    }
  }))
  expect(mySortedMap
    .setIn(['item', 'details', 'year'], 2000)
    .getIn(['item', 'details', 'year'])
  ).toEqual(2000)
}
