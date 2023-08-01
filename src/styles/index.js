import { createGlobalStyle } from 'styled-components';
import './index.css';
import './normalize.css';
export { dropAndBounce, fadeIn, privacyScreenDuration } from './animations';
export const theme = {
	blue: '#A4D3F6',
	blueContent: '#3275A7',
  blueMuted: '#60A2D4',
	pink: '#FFC1E0',
	pinkContent: '#B15081',
  pinkMuted: '#D47CA8',
	yellow: '#F3F99C',
	yellowContent: '#B88D2A',
  yellowMuted: '#D9AE4B',
	white: '#FFFFFF',

	bodyFont: 'Milky Nice',
	headerFont: 'Milky Nice Clean',

	borderRadius: '1rem',
  topNavHeight: '4.5rem',
	breakpoints: {
		width: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1536px',
		},
		height: {
			sm: '320px',
			md: '432px',
			lg: '576px',
			xl: '720px',
			xxl: '864px',
		},
	},
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: ${props => props.theme.bodyFont};

    @media only screen and (min-width: ${props => props.theme.breakpoints.width.sm}) {
      font-size: 12px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.width.lg}) {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 520px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.headerFont};
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;
