import { words } from './data/words.js'
type scopeType = 'PARAGRAPHS' | 'WORDS' | 'SENTENCES'
type IGenerate = {
  amount?: number
  scope?: scopeType
  startWith?: boolean
}
type IExtra = {
  MIN_WORDS_PER_SENTENCE?: number
  MAX_WORDS_PER_SENTENCE?: number
  MIN_SENTENCES_PER_PARAGRAPH?: number
  MAX_SENTENCES_PER_PARAGRAPH?: number
}
export function generate(options: IGenerate = {}, extra?: IExtra) {
  const { amount = 1, scope = 'PARAGRAPHS', startWith = true } = options
  let {
    MAX_SENTENCES_PER_PARAGRAPH = 10,
    MIN_SENTENCES_PER_PARAGRAPH = 3,
    MIN_WORDS_PER_SENTENCE = 5,
    MAX_WORDS_PER_SENTENCE = 15,
  } = extra || {}
  let generated = []

  MAX_WORDS_PER_SENTENCE = startWith
    ? MAX_WORDS_PER_SENTENCE - 3
    : MAX_WORDS_PER_SENTENCE

  //  if scope is paragraph then generated will contain amount of paragraphs
  if (scope === 'PARAGRAPHS') {
    for (let i = 0; i < amount; i++) {
      generated.push(
        `${generateParagraph(
          MAX_SENTENCES_PER_PARAGRAPH,
          MIN_SENTENCES_PER_PARAGRAPH,
          MAX_WORDS_PER_SENTENCE,
          MIN_WORDS_PER_SENTENCE
        )}`
      )
    }
  }

  // if scope is sentence then generated will contain amount of sentences
  if (scope === 'SENTENCES') {
    for (let i = 0; i < amount; i++) {
      generated.push(
        `${generateSentence(MAX_WORDS_PER_SENTENCE, MIN_WORDS_PER_SENTENCE)}`
      )
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

function generateParagraph(
  MIN_SENTENCES_PER_PARAGRAPH: number,
  MAX_SENTENCES_PER_PARAGRAPH: number,
  MAX_WORDS_PER_SENTENCE: number,
  MIN_WORDS_PER_SENTENCE: number
) {
  const paragraph = []
  const sentence = getRandomNumber(
    MIN_SENTENCES_PER_PARAGRAPH,
    MAX_SENTENCES_PER_PARAGRAPH
  )

  for (let i = 0; i < sentence; i++) {
    paragraph.push(
      `${generateSentence(MAX_WORDS_PER_SENTENCE, MIN_WORDS_PER_SENTENCE)}`
    )
  }
  return paragraph.join(' ')
}

function generateSentence(
  MAX_WORDS_PER_SENTENCE: number,
  MIN_WORDS_PER_SENTENCE: number
) {
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
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}
