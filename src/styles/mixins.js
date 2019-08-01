import { css } from 'styled-components';

const sizes = {
  desktop: 769,
  // tablet: 768,
  // mobile: 576,
};

// Iterate through the sizes and create a media template
export const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
