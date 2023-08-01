import { AnimatePresence, useIsPresent } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import { routes } from '.';
const Root = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes
				location={location}
				key={location.pathname}
			>
				{routes.map((route, ind) => (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</AnimatePresence>
	);
};

export default Root;
