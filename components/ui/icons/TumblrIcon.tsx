import React from 'react';

interface TumblrIconProps extends React.HTMLAttributes<HTMLLIElement> {}

const TumblrIcon = ({ className, ...props }: TumblrIconProps) => {
  return <i {...props} className={`${'fa fa-tumblr'} ${className}`}></i>;
};

export default TumblrIcon;
