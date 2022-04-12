import { generate } from './index.js'

generate({
  amount: 10,
  scope: 'PARAGRAPHS',
  startWith: true,
})
  .then((generated) => console.info(generated.join('\n')))
  .catch(console.error)
