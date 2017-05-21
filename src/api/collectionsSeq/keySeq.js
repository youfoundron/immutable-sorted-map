import { Seq } from 'immutable'

export default function () {
  return Seq.Indexed(this.keys())
}
