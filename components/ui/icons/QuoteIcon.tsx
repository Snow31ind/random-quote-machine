import React from 'react';

interface QuoteIconProps extends React.HTMLAttributes<HTMLLIElement> {}

const QuoteIcon = ({ className, ...props }: QuoteIconProps) => {
  return <i {...props} className={`${'fa fa-quote-left'} ${className}`}></i>;
};

export default QuoteIcon;
