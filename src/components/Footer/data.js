import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const createIconElement = (IconComponent, options) => {
  return React.createElement(IconComponent, {
    sx: { fontSize: '3rem', color: '#159EEC' },
    ...options,
  });
};

export const feature = [{
  id: 1,
  category: 'features',
  sub: ['workflow', 'strategy', 'cookies', 'licenses']
}]

export const contact = [{
  id: 1,
  category: 'contact',
  sub: ['philippines', '+63-987-6543-210', 'example@gmail.com']
}]

export const links = [
  {
    id: 1,
    category: 'page links',
    sub: [
      {
        id: 1,
        link: '/',
        text: 'home',
      },
      {
        id: 2,
        link: 'about',
        text: 'about',
      },
      {
        id: 3,
        link: 'contact',
        text: 'contact',
      },
    ],
  },
];

export const socmed = [
  {
    id: 1,
    category: 'follow us',
    sub: [
      {
        id: 1,
        text: 'facebook',
        link: 'https://www.facebook.com/',
        icon: createIconElement(FaFacebook),
      },
      {
        id: 2,
        text: 'instagram',
        link: 'https://www.facebook.com/',
        icon: createIconElement(AiFillInstagram),
      },
      {
        id: 3,
        text: 'tiktok',
        link: 'https://www.tiktok.com/',
        icon: createIconElement(FaTiktok),
      },
      {
        id: 4,
        text: 'twitter',
        link: 'https://twitter.com/',
        icon: createIconElement(FaSquareXTwitter),
      },
    ],
  },
];
