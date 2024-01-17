'use client';

import QuoteIcon from '@/components/ui/icons/QuoteIcon';
import TumblrIcon from '@/components/ui/icons/TumblrIcon';
import TwitterIcon from '@/components/ui/icons/TwitterIcon';
import { Quote } from '@/types';
import { randomRgbColor } from '@/utils/color';
import { randomQuote } from '@/utils/quote';
import { useEffect, useState } from 'react';

const QuoteBox = ({
  onQuoteChange,
  color,
  quote: { content, author },
}: {
  color: string;
  quote: Quote;
  onQuoteChange: (quote: Quote) => void;
}) => {
  return (
    <div id='quote-box'>
      <div id='quote-text' style={{ color }}>
        <QuoteIcon />
        <span>{content}</span>
      </div>
      <div id='quote-author' style={{ color }}>
        <p>- {author.name}</p>
      </div>
      <div id='quote-buttons'>
        <div id='quote-links'>
          <a
            href='https://twitter.com'
            target='_blank'
            style={{ backgroundColor: color }}>
            <TwitterIcon />
          </a>
          <a
            href='https://www.tumblr.com'
            target='_blank'
            style={{ backgroundColor: color }}>
            <TumblrIcon />
          </a>
        </div>
        <div>
          <button
            onClick={() => onQuoteChange(randomQuote())}
            style={{ backgroundColor: color }}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [quote, setQuote] = useState<Quote>();
  const [color, setColor] = useState('');

  useEffect(() => {
    setQuote(randomQuote());
    setColor(randomRgbColor());
  }, []);

  const handleQuoteChange = (quote: Quote) => {
    setQuote(quote);
    setColor(randomRgbColor());
  };

  return (
    <main
      id='main'
      style={{
        backgroundColor: color,
      }}>
      <div id='wrapper'>
        {quote && (
          <QuoteBox
            quote={quote}
            color={color}
            onQuoteChange={handleQuoteChange}
          />
        )}
        <div id='footer'>
          <p>By Tien Li</p>
        </div>
      </div>
    </main>
  );
}
