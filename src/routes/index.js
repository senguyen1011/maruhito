import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Faq from './Faq';
import Art from './Art';
import Fanart from './Fanart';
import Original from './Original';
import Prices from './Prices';
import Contacts from './Contacts';

export const routes = [
	{
		name: 'Home',
		path: '/',
		element: <Home />,
		color: 'blue',
	},
	{
		name: 'About Me',
		path: '/about',
		element: <About />,
		color: 'pink',
	},
	{
		name: 'FAQ',
		path: '/faq',
		element: <Faq />,
		color: 'white',
	},
	{
		name: 'Art',
		path: '/art',
		element: <Art />,
		color: 'white',
	},
  {
    name: 'Fanart',
    path: '/fanart',
    element: <Fanart />
  },
  {
    name: 'Original',
    path: '/original',
    element: <Original />
  },
	{
		name: 'Prices',
		path: '/prices',
		element: <Prices />,
		color: 'blue',
	},
	{
		name: 'Contacts',
		path: '/contact',
		element: <Contacts />,
		color: 'yellow',
	},
];

export const router = createBrowserRouter(routes);
