import './index.css'
import "./fonts/fonts.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

/* Set up theme, breakpoints, fonts, ... */
const theme = extendTheme({
	colors: {
		STProgress: {
			red: "#C22026",
			gray: "#6F7376",
			black: "#111511",
			lightGray: "#D9D9D9",
			redHover: "#94181D",
		}
	},
	fonts: {
		heading: "'Tourney', sans-serif",
		body: "'IBMPlexSans', sans-serif",
	},
	breakpoints: {
		sm: '320px',
		md: '768px',
		lg: '960px',
		xl: '1310px',
		'2xl': '1536px',
		'3xl': '2240px',
	},
	components: {},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
)
