import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = { // Add own themes (remember to copy it to style.d.ts)
  colors: {
    white: '#ffffff',
    black: '#000000',
    darkText: '#3b4363',
    scoreText: '#2a46c0',
    headerOutline: '#606e85',
    grayText: '#565468',
    gradient: {
      scissors: ['#ec9e0e', '#eca922' ],
      paper: ['#4865f4', '#5671f5' ],
      rock: ['#dc2e4e', '#dd405d' ],
      lizard: ['#834fe3', '#8c5de5' ],
      cyan: ['#40b9ce', '#52bed1' ],
      radialGradient: ['#1f3756', '#141539']
    }
  }
};

export default theme;
