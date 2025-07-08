import { expect, test } from 'vitest'
import { parse } from './parse'

test('parse', () => {
  expect(parse('user:Alice')).toEqual({
    key: 'user',
    value: 'Alice',
  })
})
