import { Quote } from '@/types';

const quotes = [
  {
    content: 'The only way to do great work is to love what you do.',
    author: {
      name: 'Steve Jobs',
    },
  },
  {
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: {
      name: 'Winston Churchill',
    },
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: {
      name: 'Robert Frost',
    },
  },
  {
    content: "Believe you can and you're halfway there.",
    author: {
      name: 'Theodore Roosevelt',
    },
  },
  {
    content:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: {
      name: 'Franklin D. Roosevelt',
    },
  },
  {
    content: 'It is never too late to be what you might have been.',
    author: {
      name: 'George Eliot',
    },
  },
  {
    content: 'The best way to predict the future is to create it.',
    author: {
      name: 'Peter Drucker',
    },
  },
  {
    content:
      'Do not wait to strike till the iron is hot, but make it hot by striking.',
    author: {
      name: 'William Butler Yeats',
    },
  },
  {
    content:
      'Success is stumbling from failure to failure with no loss of enthusiasm.',
    author: {
      name: 'Winston S. Churchill',
    },
  },
  {
    content:
      'The only person you are destined to become is the person you decide to be.',
    author: {
      name: 'Ralph Waldo Emerson',
    },
  },
];

export function randomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
