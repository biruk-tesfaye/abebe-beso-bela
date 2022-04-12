import { generate } from '../dist/lib/generate'
import { log } from 'console'
describe('generate', () => {
  it('should generate a random text', () => {
    let generated = generate({
      amount: 1,
      scope: 'PARAGRAPHS',
    })[0]
    log(JSON.stringify(generated))
    let g = generated.split('።')
    log(g)
    expect(g.length).toBeGreaterThanOrEqual(3)
    expect(g.length).toBeLessThanOrEqual(10)
  })
})
