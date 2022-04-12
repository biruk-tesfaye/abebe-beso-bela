# Abebe beso bela - Lorem ipsum for Amharic text

A Node.js module for generating Amharic placeholder text.

> The project is named after a well-known Amharic sentence (አበበ በሶ በላ።) that is used to educate children how to construct sentences.

[Demo website](http://abebe-beso-bela.vercel.app/)

## Installation

```npm
npm install abebe-beso-bela
```

## Usage Example

```ts
import { generate } from 'abebe-beso-bela'
let generated = generate()
```

## Options

You can pass _options_ and _extra_ to customize the functions output

```ts
let generated = generate({
    amount?:number
    scope?:'PARAGRAPHS' | 'WORDS' | 'SENTENCES'
    startWith?: boolean
},{
  MIN_WORDS_PER_SENTENCE?: number
  MAX_WORDS_PER_SENTENCE?: number
  MIN_SENTENCES_PER_PARAGRAPH?: number
  MAX_SENTENCES_PER_PARAGRAPH?: number
})


//startWith default is true — adds the default "አበበ በሶ በላ" at the beginning of the generated output
```

## Default values

```ts
let generated = generate({
    amount:1
    scope:'PARAGRAPHS'
    startWith: true
},{
  MIN_WORDS_PER_SENTENCE: 5
  MAX_WORDS_PER_SENTENCE: 15
  MIN_SENTENCES_PER_PARAGRAPH: 3
  MAX_SENTENCES_PER_PARAGRAPH: 10
})
```

## License

Made with &hearts; in Addis Ababa.

MIT License &copy; 2022 [Biruk H.](https://biruk.kelaltech.com/)
