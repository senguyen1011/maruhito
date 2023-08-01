import { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';
import { theme, fadeIn } from '../styles';
import TopNav from './TopNav';
import MobileNav from './MobileNav';

const ContainerWithNav = ({ navColor, navExclude, children }) => {
	const [color, setColor] = useState('');
	const isWidthMd = useMediaQuery(`only screen and (min-width: ${theme.breakpoints.width.md})`);

	return (
		<StyledMain
			animate={{ backgroundColor: theme.white }}
			exit={{ backgroundColor: theme[color] }}
			transition={fadeIn.transition}
		>
			{isWidthMd ? (
				<TopNav
					color={navColor}
					exclude={navExclude}
					handleClick={res => setColor(res.color)}
				/>
			) : (
				<MobileNav
					color='blueContent'
					exclude={navExclude}
					handleClick={res => setColor(res.color)}
				/>
			)}

			{children}
		</StyledMain>
	);
};

const StyledMain = styled(motion.main)`
	width: 100%;
  min-height: 100vh;
	padding-bottom: 2rem;
	padding-top: calc(${props => props.theme.mobileNavHeight} + 3rem);
	margin-top: 0;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	background-color: ${props => props.theme.white};
	color: ${props => props.theme.blueContent};

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		padding-top: 2rem;

		min-height: calc(100vh - ${props => props.theme.topNavHeight});

		margin-top: ${props => props.theme.topNavHeight};
	}
`;

export default ContainerWithNav;
