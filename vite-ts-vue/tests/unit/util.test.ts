import { assert, describe, it } from 'vitest'
import { isJSON } from '@util/index'

describe('util', () => {
  it('isJSON', () => {
    const correct = JSON.stringify({ text: 'test isJSON method' })
    const mistake = correct.slice(0, correct.length - 2)
    assert.equal(isJSON(correct), true)
    assert.equal(isJSON(mistake), false)
  })
})
