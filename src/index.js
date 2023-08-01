import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { router } from './routes';
import { GlobalStyle, theme } from './styles';
import Root from './routes/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
    <BrowserRouter>
      <Root />
    </BrowserRouter>
		{/* <AnimatePresence mode='wait'>
			<RouterProvider router={router} />
		</AnimatePresence> */}
	</ThemeProvider>
);
