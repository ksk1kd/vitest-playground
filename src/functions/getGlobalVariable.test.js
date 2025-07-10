import { expect, vi } from 'vitest'
import { getGlobalVariable } from './getGlobalVariable'

test('getGlobalVariable should return the mocked value', () => {
  vi.stubGlobal('globalVariable', 'mocked value')

  expect(getGlobalVariable()).toBe('mocked value')
})
