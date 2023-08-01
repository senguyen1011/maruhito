import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { routes } from '../routes/index';
import { theme, dropAndBounce, fadeIn } from '../styles';

const Nav = ({
	color,
	size = '1.5rem',
	align = 'start',
	exclude = [],
	animateDelay = 0.1,
	handleClick,f
}) => {
  exclude = [...exclude, 'Fanart', 'Original'];
	const navList = routes.filter(route => !exclude.includes(route.name));

	return (
		<NavWrapper
			size={size}
			align={align}
			exit={fadeIn.initial}
			transition={fadeIn.transition}
		>
			{navList.map((route, ind) => {
				return (
					<Fragment key={`navLink-${ind}`}>
						<motion.span
							initial={dropAndBounce.initial}
							animate={dropAndBounce.animate}
							transition={{
								...dropAndBounce.transition,
								delay: animateDelay + 0.1 * ind,
							}}
						>
							<motion.div
								whileHover={{ y: '-0.5rem' }}
								whileTap={{ scale: 0.8 }}
								transition={{
									type: 'spring',
									duration: 0.5,
									bounce: 0.5,
								}}
							>
								<NavLink
									color={color}
									to={route.path}
									onClick={() => handleClick(route)}
								>
									{route.name}
								</NavLink>
							</motion.div>
						</motion.span>
						{ind + 1 != navList.length && (
							<motion.svg
								height='0.25em'
								width='0.25em'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 + animateDelay + 0.1 * navList.length }}
							>
								<circle
									cx='50%'
									cy='50%'
									r='50%'
									fill={theme[color]}
								/>
							</motion.svg>
						)}
					</Fragment>
				);
			})}
		</NavWrapper>
	);
};

const NavWrapper = styled(motion.nav)`
	display: flex;
	align-items: center;
	justify-content: ${props => props.align};
	gap: 1rem;

	font-size: ${props => props.size};
	text-transform: uppercase;
	margin-top: 0.5em;
`;

const NavLink = styled(Link)`
	color: ${props => props.theme[props.color]};
`;

export default Nav;
