import { generate } from '../dist/lib/generate'

describe('generate', () => {
  it('should generate a random text', () => {
    expect(
      generate({
        amount: 2,
        scope: 'WORDS',
        startWith: true,
      })
    ).resolves.toHaveLength(2)
  })
})
