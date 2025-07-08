export const messages = {
  items: [
    { message: 'message 1', from: 'Testman' },
    { message: 'message 2', from: 'Testman' },
    { message: 'message 3', from: 'Testman' },
  ],
  getLatest,
}

export function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}
