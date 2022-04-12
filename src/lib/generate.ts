import { words } from './data/words.js'
type scopeType = 'PARAGRAPHS' | 'WORDS' | 'SENTENCES'
type IGenerate = {
  amount?: number
  scope?: scopeType
  startWith?: boolean
}

const MAX_WORDS_PER_SENTENCE = 15
const MIN_WORDS_PER_SENTENCE = 5

const MAX_SENTENCES_PER_PARAGRAPH = 10
const MIN_SENTENCES_PER_PARAGRAPH = 3

export function generate(body: IGenerate = {}) {
  const { amount = 1, scope = 'PARAGRAPHS', startWith = true } = body
  let generated = []

  //  if scope is paragraph then generated will contain amount of paragraphs
  if (scope === 'PARAGRAPHS') {
    for (let i = 0; i < amount; i++) {
      generated.push(`${generateParagraph()} `)
    }
  }

  // if scope is sentence then generated will contain amount of sentences
  if (scope === 'SENTENCES') {
    for (let i = 0; i < amount; i++) {
      generated.push(`${generateSentence()} `)
    }
  }
  // if scope is word then generated will contain amount of words
  if (scope === 'WORDS') {
    for (let i = 0; i < amount; i++) {
      generated.push(`${words[Math.floor(Math.random() * words.length)]} `)
    }
  }

  if (startWith && (scope === 'PARAGRAPHS' || scope === 'SENTENCES')) {
    generated[0] = 'አበበ በሶ በላ '.concat(generated[0] || '')
  }
  return generated
}

function generateParagraph() {
  const paragraph = []
  const sentence = getRandomNumber(
    MIN_SENTENCES_PER_PARAGRAPH,
    MAX_SENTENCES_PER_PARAGRAPH
  )

  for (let i = 0; i < sentence; i++) {
    paragraph.push(`${generateSentence()}`)
  }
  return paragraph.join('\n')
}

function generateSentence() {
  const sentence = []
  const word = getRandomNumber(MIN_WORDS_PER_SENTENCE, MAX_WORDS_PER_SENTENCE)

  for (let i = 0; i < word; i++) {
    sentence.push(`${words[Math.floor(Math.random() * words.length)]} `)
  }

  sentence[sentence.length - 1] = sentence[sentence.length - 1]?.replace(
    ' ',
    '።'
  )

  return `${sentence.join('')}`
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
