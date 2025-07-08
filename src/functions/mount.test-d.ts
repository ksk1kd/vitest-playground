import { expectTypeOf, test } from 'vitest'
import { mount } from './mount'

test('my types work properly', () => {
  expectTypeOf(mount).toBeFunction()
  expectTypeOf(mount).parameter(0).toEqualTypeOf<number>()
})
