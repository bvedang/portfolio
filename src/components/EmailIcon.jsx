import { SocialIcon } from 'react-social-icons';

import React from 'react';

export default function EmailIcon({ theme, dark }) {
  const icon =
    theme === dark ? (
      <SocialIcon
        className="cursor-pointer"
        url='#contact'
        network="email"
        fgColor="white"
        bgColor="transparent"
      />
    ) : (
      <SocialIcon
        className="cursor-pointer"
        url='#contact'
        network="email"
        fgColor="black"
        bgColor="transparent"
      />
    );
  return <div>{icon}</div>;
}
