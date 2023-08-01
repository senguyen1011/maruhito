import { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { theme, fadeIn } from '../styles';
import TopNav from './TopNav';

const ContainerWithNav = ({ navColor, navExclude, children }) => {
	const [color, setColor] = useState('');
	return (
		<StyledMain
			animate={{ backgroundColor: theme.white }}
			exit={{ backgroundColor: theme[color] }}
			transition={fadeIn.transition}
		>
			<TopNav
				color={navColor}
				exclude={navExclude}
				handleClick={res => setColor(res.color)}
			/>
			{children}
		</StyledMain>
	);
};

const StyledMain = styled(motion.main)`
	width: 100%;
  height: 100%;
	min-height: calc(100vh - ${props => props.theme.topNavHeight});
	margin-top: ${props => props.theme.topNavHeight};
	padding: 2rem 0;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	background-color: ${props => props.theme.white};
	color: ${props => props.theme.blueContent};
`;

export default ContainerWithNav;
