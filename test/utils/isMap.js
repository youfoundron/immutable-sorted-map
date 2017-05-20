import { Map } from 'immutable'
import { isMap } from '../../src/util'

export default () => {
  expect(isMap(Map())).toEqual(true)
  expect(isMap({})).toEqual(false)
}
