import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    white: '#ffffff',
    black: '#16161D',
    blue: '#04033D',

  },
  textStyles: {
    h1: {
      fontFamily: "Rational TW Display DEMO",
      fontWeight: 600,
      fontSize: ['2rem', '3rem'],
      lineHeight: '160%',
      color: "black",
      // letterSpacing: "-2%",
    },
    p: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: ['0.9rem', '1.125rem'],
      lineHeight: '176%',

    },
 
  },
  fonts,
  breakpoints,
})

export default theme
