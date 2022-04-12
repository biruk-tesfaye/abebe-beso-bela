import { generate } from '../dist/lib/generate'

describe('generate', () => {
  it('should generate a random text', () => {
    expect(generate()).toHaveLength(1)
  })
})
