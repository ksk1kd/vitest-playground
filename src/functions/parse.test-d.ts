import { expectTypeOf, test } from 'vitest'
import { parse } from './parse'

test('parse', () => {
  expectTypeOf(parse('user:Alice')).toEqualTypeOf<{
    key: 'user'
    value: 'Alice'
  }>()
})
