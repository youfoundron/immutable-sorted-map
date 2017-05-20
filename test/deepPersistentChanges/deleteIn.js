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
    .deleteIn(['item', 'details', 'model'])
    .getIn(['item', 'details', 'model'])
  ).toEqual(undefined)
}
