import React from 'react';

interface TwitterIconProps extends React.HTMLAttributes<HTMLLIElement> {}

const TwitterIcon = ({ className, ...props }: TwitterIconProps) => {
  return <i {...props} className={`${'fa fa-twitter'} ${className}`}></i>;
};

export default TwitterIcon;
