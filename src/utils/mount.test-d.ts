import { test } from 'vitest'
import { expectTypeOf } from 'vitest'
import { mount } from './mount'

test('my types work properly', () => {
  expectTypeOf(mount).toBeFunction()
  expectTypeOf(mount).parameter(0).toMatchTypeOf<string>()
})
