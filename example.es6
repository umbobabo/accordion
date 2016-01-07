import React from 'react';
import context from '@economist/component-sections-card/context';
import Accordion from './index';
// Force media links to use icon as background.
context.media.map((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'honolulu',
    icon: mediaLink.meta,
  };
  return mediaLink;
});

const accordionContext = [
  {
    title: 'Sections',
    href: 'http://www.economist.com/sections',
    children: context.sections,
  },
  {
    title: 'Blogs',
    href: 'http://www.economist.com/blogs',
    children: context.blogs,
  },
  ...context.media,
  {
    title: 'Print Edition',
    href: 'http://www.economist.com/printedition/',
  },
  {
    title: 'Products',
    href: 'http://www.economist.com/digital',
  },
];

export default (
  <Accordion list={accordionContext} />
);
