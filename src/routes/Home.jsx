import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useMediaQuery } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';

import { theme, dropAndBounce, fadeIn } from '../styles';
import Nav from '../components/Nav';
import Logo from '../components/Logo/Logo';
import Container from '../components/Container';
import heroImg from '../assets/welcomeHero.png';

const Home = () => {
	const isWidthMd = useMediaQuery(`only screen and (min-width: ${theme.breakpoints.width.md})`);
	const [color, setColor] = useState('blue');
  useEffect(() => {
    const themeColor = document.getElementById('themeColor');
    themeColor.setAttribute('content', theme.blue);
  });

	return (
		<HomeMain
			animate={{ backgroundColor: theme.blue }}
			exit={{ backgroundColor: theme[color] }}
			transition={fadeIn.transition}
		>
			<HomeContainer>
				<Hero
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
					transition={fadeIn.transition}
				>
					<Title>
						<motion.h1
							initial={dropAndBounce.initial}
							animate={dropAndBounce.animate}
							transition={{ ...dropAndBounce.transition }}
						>
							welcome!
						</motion.h1>
						<Logo
							size={isWidthMd ? '8rem' : '6rem'}
							color={isWidthMd ? '' : 'blueContent'}
							animate={true}
						/>
					</Title>
					{isWidthMd && <HeroImage />}
				</Hero>
				<Nav
					color='blueContent'
					size='2rem'
					exclude={['Home']}
					handleClick={res => setColor(res.color)}
          responsive={true}
				/>
			</HomeContainer>
		</HomeMain>
	);
};

const HomeMain = styled(motion.main)`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	background-color: ${props => props.theme.blue};
	color: ${props => props.theme.blueContent};
`;

const HomeContainer = styled(Container)`
  flex-direction: column;
  gap: 2rem;
`

const Hero = styled(motion.div)`
  width: calc(100% - 6rem);
  min-height: unset;
	aspect-ratio: 1;

	display: flex;
	justify-content: center;

	background-color: ${props => props.theme.white};
	border-radius: 50%;
  overflow: hidden;

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.sm}) {
		width: calc(100% - 18rem);
	}
  
	@media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		min-height: 32rem;
		width: 100%;
		aspect-ratio: unset;
		border-radius: ${props => props.theme.borderRadius};
	}

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.xl}) {
		grid-template-columns: 1fr 2fr;
	}
`;

const Title = styled.div`
	position: relative;
  width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	z-index: 2;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		background-image: url(${heroImg});
		background-size: cover;

		opacity: 0.5;
		z-index: 0;
	}

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		&::before {
			background-image: none;
		}
	}

	h1 {
		font-size: 2rem;
	}
`;

const HeroImage = styled.div`
	background-image: url(${heroImg});
	background-repeat: no-repeat;

	background-size: cover;

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.xl}) {
		background-size: unset;
		background-position: 40% 40%;
	}

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.xxl}) {
		background-position: 15% 40%;
	}
`;

export default Home;
