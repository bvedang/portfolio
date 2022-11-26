import React from 'react';
import { SocialIcon } from 'react-social-icons';
export default function SocialIcons({ theme, dark,url }) {
  const icon =
    theme === dark ? (
      <SocialIcon
        url={url}
        fgColor="white"
        bgColor="transparent"
      />
    ) : (
      <SocialIcon
        url={url}
        fgColor="black"
        bgColor="transparent"
      />
    );
  return (
    <>
    {icon}
    </>
  );
}
