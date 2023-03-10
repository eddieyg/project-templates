export function isJSON(val: string) {
  if (typeof val !== 'string')
    return false
  try {
    const obj = JSON.parse(val)
    return Boolean(typeof obj === 'object' && obj)
  }
  catch {
    return false
  }
}
