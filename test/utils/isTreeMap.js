import { Map } from 'immutable'
import { isTreeMap } from '../../src/util'

export default () => {
  expect(isTreeMap(Map({key: 'foo', value: 'bar'}))).toEqual(true)
  expect(isTreeMap(Map())).toEqual(false)
  expect(isTreeMap({key: 'foo', value: 'bar'})).toEqual(false)
}
