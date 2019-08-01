import { rgba, darken, lighten, saturate } from 'polished'

const color = {
  baseColor: '#48629A',
  whiteDarkColor: '#f2eeec',
  accentColor: '#ec7b7e',
  keyColor: '#203a72',
  whiteColor: '#fff',
  blackColor: '#000',
  greenColor: '#62bca2',
  yellowColor: '#e9bf6e',
}

export default {
  colors: {
    baseColor: color.baseColor,
    accentColor: color.accentColor,

    keyColor: color.keyColor,
    keyClearColor: rgba(color.keyColor, .8),
    keyNoneColor: rgba(color.keyColor, 0),

    redColor: color.accentColor,
    redShineColor: lighten(.06, saturate(.06, color.accentColor)),
    textRedColor: darken(.2, color.accentColor),

    whiteColor: color.whiteDarkColor,
    whiteClearColor: rgba(color.whiteDarkColor, .2),
    textWhiteColor: rgba(saturate(.2, color.whiteDarkColor), .96),
    textWhiteClearColor: rgba(saturate(.6, color.whiteDarkColor), .4),

    blackColor: color.blackColor,
    blackClearColor: rgba(color.blackColor, .08),
    textColor: rgba(color.blackColor, .8),
    textClearColor: rgba(darken(.12, color.keyColor), .48),
    textLinkColor: darken(.2, color.greenColor),

    grayColor: lighten(.4, color.blackColor),
    greenColor: color.greenColor,
    greenShineColor: lighten(.06, saturate(.06, color.greenColor)),

    yellowColor: color.yellowColor,

    // assets
    borderColor: rgba(color.blackColor, .08),
    shadowColor: rgba(color.blackColor, .2),
  },

  sizes: {
    siteWidth: '1060px',
    mainWidth: '730px', //730px
    sideWidth: '300px',
    sec: '.2s',
  },

  fonts: {
    fontSizeDesktop: '16px',
    fontSizeMobile: '14px',
    fontSizeInput: '16px',

    fontSizeXxsmall: '.56rem',
    fontSizeXsmall: '.7rem',
    fontSizeSmall: '.86rem',
    fontSizeLarge: '1.6rem',
    fontSizeXlarge: '2rem',
    fontSizeXxlarge: '2.6rem',
    fontSizeXxxlarge: '3.2rem',
    fontSizeXxxxlarge: '6rem',

    defaultFont: '"Lato", "Noto Sans JP", sans-serif',
  }
}
