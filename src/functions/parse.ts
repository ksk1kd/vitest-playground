export function parse<T extends string, U extends string>(kv: `${T}:${U}`) {
  const [key, value] = kv.split(':')
  return { key, value } as { key: T; value: U }
}
