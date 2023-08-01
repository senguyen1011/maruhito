import { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, dropAndBounce, theme } from '../styles';
import Logo from './Logo/Logo';
import Nav from './Nav';
import Container from './Container';

const MobileNav = ({ color, exclude, handleClick }) => {
	const [nextColor, setNextColor] = useState('');
	return (
		<NavWrapper
			initial={fadeIn.initial}
			animate={fadeIn.animate}
		>
			<NavContainer>
				<Logo
					color={color}
					size='2rem'
				/>
				<Nav
					color={color}
					align='center'
					exclude={[...exclude, 'Home']}
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
	display: flex;
	position: fixed;
	flex-direction: column;
	top: 0;
	left: 0;
	height: ${props => props.theme.mobileNavHeight};
	width: 100%;
	padding: 1rem 0;

	z-index: 10;
`;

const NavContainer = styled(Container)`
	flex-direction: column;
`;

export default MobileNav;
