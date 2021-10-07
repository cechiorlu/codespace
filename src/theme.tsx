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
    stroke: '#F0F0F0'
  },

  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "semibold", // Normally, it is "semibold"
        _focus: {
          boxShadow:
            "none",
        },
        borderRadius: "0px"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          py: "15px",
          // px: "32px",
        },
        h: {
          w: "50%",
        },
        f: {
          w: '100%',
        }
      },
      // 3. We can add a new visual variant
      variants: {
        outline: (props) => ({
          bg: 'white',
          color: 'blue',
          border: "3px solid #02021c",
          _hover: { color: "#02021c" },
          _active: { color: "#02021c" },
        }),

        "box-outline": {
          bg: 'white',
          color: 'blue',
          border: "2px solid #04033D",
          _hover: { color: "#02021c" },
          _active: { color: "#02021c" },
        },

        solid: (props) => ({
          bg: 'blue',
          color: '#E5E5E5',
          _hover: { bg: "#02021c" },
          _active: { bg: "#02021c" }
        }),
      },
    },
    Tab: {
      variants: {
        "no-focus": {

        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },

    },
  },
  textStyles: {
    link: {
      FontFamily: "Metropolis",
      FontStyle: "regular",
      FontSize: "18px",
      Align: "center",
      VerticalAlign: "top",
      color: "rgba(0, 0, 0, 0.6)"
    },

    button: {
      fontFamily: "Rational TW Display DEMO",
      fontWeight: 400,
      fontSize: ['1rem', '1.1rem'],
      lineHeight: '155.5%',
      color: "black",
    },

    h1: {
      fontFamily: "rational-tw-semibold",
      fontWeight: 600,
      fontSize: ['2rem', '3rem'],
      lineHeight: '160%',
      color: "black",
      // letterSpacing: "-2%",
    },

    // headings (overview, 'hello mati') for student and teacher dashboards
    h2: {

    },
    landingText: {
      fontFamily: "Metropolis",
      fontStyle: "Regular",
      fontSize: "18px",
      align: "Left",
      verticalAlign: "Top",
      lineHeight: "176%",
      color: ""
    },

    regular: {
      fontFamily: "Metropolis",
      fontStyle: "normal",
      fontSize: "16px",
      color: "rgba(4, 3, 61, 0.5)",
      lineHeight: "173%",
    },
    fonts,
    breakpoints,
  }
})

export default theme
