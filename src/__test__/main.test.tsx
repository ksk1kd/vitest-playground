import { describe, expect, it } from 'vitest'
import { vi } from 'vitest'
import type { MockInstance } from 'vitest'

vi.mock('react-dom/client', () => {
  return {
    createRoot: vi.fn(() => ({
      render: vi.fn(),
    })),
  }
})

describe('main.tsx', () => {
  it('calls createRoot and render', async () => {
    const rootElem = document.createElement('div')
    rootElem.id = 'root'
    document.body.appendChild(rootElem)

    await import('../main')

    const { createRoot } = await import('react-dom/client')
    expect(createRoot).toHaveBeenCalledWith(rootElem)

    const rootInstance = (createRoot as unknown as MockInstance).mock.results[0]
      .value
    expect(rootInstance.render).toHaveBeenCalled()
  })
})
