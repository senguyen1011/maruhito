import { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, dropAndBounce, theme } from '../styles';
import Logo from './Logo/Logo';
import Nav from './Nav';
import Container from './Container';

const TopNav = ({ color, exclude, handleClick }) => {
	const [nextColor, setNextColor] = useState('');
	return (
		<NavWrapper
			color={color}
      initial={fadeIn.initial}
			animate={{ ...fadeIn.animate, backgroundColor: theme[color] }}
			exit={{ backgroundColor: theme[nextColor] }}
		>
			<NavContainer>
				<Logo
					color={`${color}Content`}
					size='2rem'
				/>
				<Nav
					color={`${color}Content`}
					align='end'
					exclude={exclude}
					handleClick={res => {
						handleClick(res);
						setNextColor(res.color);
					}}
				/>
			</NavContainer>
		</NavWrapper>
	);
};

const NavWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: ${props => props.theme.topNavHeight};
	padding: 1rem 0;

	background-color: ${props => props.theme[props.color]};

	z-index: 10;
`;

const NavContainer = styled(Container)`
	justify-content: space-between;
`;

export default TopNav;
